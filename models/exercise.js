const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {type: String, required: true},
    time: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', exerciseSchema);