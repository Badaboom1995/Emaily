const mongoose = require('mongoose');
const { Schema } = mongoose;

let GoalSchema = new Schema({
    name: {type: String, required: true, max: 100},
    duration: {type: String, required: true},
});


module.exports = mongoose.model('Goal', GoalSchema);