const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    recipients:{
        type: [RecipientSchema],
        required: true
    },
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    },
    _user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    dateSent: Date,
    lastResponded: Date
}, {
    timestamps: true
});

mongoose.model('surveys', surveySchema);
