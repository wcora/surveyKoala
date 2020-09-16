const keys = require('../../config/keys')
module.exports = survey => {
  return (`
      <html>
        <body>
            <div style="text-align: center;">
                <h3 style="font-size: 0.8rem;">SURVEY KOALA</h3>
                <h2 style="font-weight: bold; font-size: 2rem;">I'd like your input!</h2>
                <p>
                    Hi! This is a survey from Survey Koala. A friend of you want you to do him a favor!
                    <br/>
                    Could you please answer the following question to help him improve?
                  </p>
                <br/>
                <p style="line-height: 2rem; color:#c0c0c0; margin-top: 2rem; margin-bottom: 2rem; font-size: 1.5rem;">
                    Question: 
                </p>
                <p style="line-height: 2rem; color:#c0c0c0; margin-top: 2rem; margin-bottom: 2rem; font-size: 1.5rem;">
                    ${survey.body}</p>
                <div style="display: inline-flex;">
                  <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" style="margin-right:20px; width:100px; background-color: #ffbb91; padding: 0.5rem 1.5rem; border-radius: 100px; text-decoration: none; font-size: 1.2rem; color: #ffffff;">I Agree</a>
                  <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no" style="width: 100px; background-color: #ffbb91; padding: 0.5rem 1.5rem; border-radius: 100px; text-decoration: none; font-size: 1.2rem; color: #ffffff;">I Disagree</a>
                </div>
            </div>
        </body>
      </html>
  `);
};
