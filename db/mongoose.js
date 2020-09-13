const mongoose = require('mongoose')
const keys = require('../config/keys')

mongoose.connect(process.env.MONGODB_URL || keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
