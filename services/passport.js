const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile)
            const existingUser = await User.findOne({googleId: profile.id})
            if (existingUser) {
                // we already have a record with the given profile ID
                return done(null, existingUser);
            }
            // we don't have a user record with this ID, make a new record!
            const user = await new User({ googleId: profile.id, name: profile.displayName });
            user.save();
            done(null, user);
        } catch (e) {
            console.log(e)
            done(e, null)
        }
    }
  )
);
