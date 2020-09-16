const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// import Mongoose models
require('./models/User');
require('./models/Survey')

// start mongoose
require('./db/mongoose')

// import auth module
require('./services/passport');


const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// setup route files || can also use new express.Router()
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


// setup for heroku deploy
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile((path.resolve(__dirname, 'client', 'build', 'index.html')));
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT);
