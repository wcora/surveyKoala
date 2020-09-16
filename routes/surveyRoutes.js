const auth = require('../middlewares/auth')
const creditCheck = require('../middlewares/creditCheck')
const _ = require('lodash');

const mongoose = require('mongoose')
const Survey = mongoose.model('surveys');

const Mailer = require('../emails/Mailer');
const surveyTemplate = require('../emails/emailTemplates/surveyTemplate');

const { Path } = require('path-parser');
const { URL } = require('url');

module.exports = app => {
    // post a survey
    app.post('/api/surveys', auth, creditCheck, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients
                .split(',')
                .map((email) => ({ email: email.trim() })),
            _user: req.user._id,
            dateSent: Date.now(),
        });

        try {
            // Great place to send an email!
            const mailer = new Mailer(survey, surveyTemplate(survey));
            await mailer.send();
            await survey.save();

            req.user.credit -= 1;
            const user = await req.user.save();

            res.status(200).send(user);

        } catch (e) {
            res.status(422).send(e);
        }
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');

        _.chain(req.body)
            .map(({ email, url }) => {
                const match = p.test(new URL(url).pathname);
                if (match) {
                    return { email, surveyId: match.surveyId, choice: match.choice };
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice }) => {
                Survey.updateOne(
                    {
                        _id: surveyId,
                        recipients: {
                            $elemMatch: { email: email, responded: false },
                        },
                    },
                    {
                        $inc: { [choice]: 1 },
                        $set: { 'recipients.$.responded': true },
                        lastResponded: new Date(),
                    }
                ).exec();
            })
            .value();

        res.send({});
    });


    // get survey
    app.get('/api/surveys', auth, async (req, res) => {
        const sort = {}
        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(':');
            sort[parts[0]] = parts[1] === 'asc' ? 1 : -1;
        }
        try {
            const surveys = await Survey.find({_user: req.user.id})
                .sort(sort)
                .limit(parseInt(req.query.limit))
                .select({
                recipients: false,
            });

            res.send(surveys)
        } catch (e) {
            res.status(500).send()
        }
    })

    // delete survey
    app.delete('/api/surveys/:id', auth, async (req, res) => {
        console.log(req.params.id)
        try {
            // const task = await Task.findByIdAndDelete(req.params.id)
            const survey = await Survey.findOneAndDelete({ _id: req.params.id, _user: req.user._id })
            if (!survey) {
                res.status(404).send()
            }
            res.send(await Survey.find({_user: req.user.id}))
        } catch (e) {
            res.status(500).send()
        }
    });

};
