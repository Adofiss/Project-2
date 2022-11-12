// models/workout.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
name: {
    type: String,
    required: true
},
type: {
    type: String,
    required: true
},
exercise: {
    type: String,
    required: true
},
time: {
    type: Number,
    required: true
},
list: [{type: Schema.Types.ObjectId, ref: 'Exercise'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);
