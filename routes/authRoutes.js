const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'),(rep, res) => {
    res.redirect('/surveys');
  });

  app.get('/api/logout', (req, res) => {
    req.logout(); // need to empty your cookies
    // res.send(req.user);
    res.redirect('/'); // route back to landing is the last step
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
