const keys = require('../config/keys')
const auth = require('../middlewares/auth')
const stripe = require('stripe')(keys.stripeSecret);

module.exports = app => {
    app.post('/api/stripe', auth, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for sending a survey!',
            source: req.body.id
        });
        // this logic assumes user is logged in, so need to check auth before this part
        req.user.credit = req.user.credit + charge.amount / 100;
        const user = await req.user.save();
        res.status(200).send(user);
    });
}
