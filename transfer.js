const Workout = require('./models/workout.js')
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function() {
    Workout.updateMany(
        {},
        { list: [] }.
        function (err, result)
    )
})