const keys = require('../../config/keys')
module.exports = survey => {
  return (`
      <html>
        <body>
            <div style="text-align: center;">
                <h3>I'd like your input!</h3>
                <p>Hi! This is a survey from Survey Koala. Could you please answer the following question to help me improve?</p>
                <p>${survey.body}</p>
                <div>
                  <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                </div>
                <div>
                  <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                </div>
            </div>
        </body>
      </html>
  `);
};
