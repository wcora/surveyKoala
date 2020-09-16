const keys = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGODB_URL,
    cookieKey: process.env.COOKIE_KEY,
    stripeKey: process.env.STRIPE_KEY,
    stripeSecret: process.env.STRIPE_SECRET,
    sendGridKey: process.env.SENDGRID_API_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
}

module.exports = keys;
