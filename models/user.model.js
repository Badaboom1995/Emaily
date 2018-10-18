const mongoose = require('mongoose');
const { Schema } = mongoose;

let UserSchema = new Schema({
    googleID: String,
    name: String
})


module.exports = mongoose.model('User', UserSchema);
