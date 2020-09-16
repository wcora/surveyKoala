const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String,
  name: String,
  credit: {
    type: Number,
    default: 0,
  }
});

// virtual property
userSchema.virtual('surveys', {
  ref:'Survey', // which object
  localField: '_id', // how they are related
  foreignField: '_user' // which field
})


mongoose.model('users', userSchema);
