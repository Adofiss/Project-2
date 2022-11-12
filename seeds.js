// Seeding the database with workouts & exercises

require('dotenv').config();  // comment out if not using a .env file
require('./config/database');

const Workout = require('./models/workout');
const Exercise = require('./models/exercise');
// contains the seed data
const data = require('./data');

const p1 = Workout.deleteMany({});
const p2 = Exercise.deleteMany({});

Promise.all([p1, p2])
  .then(function (results) {
    console.log(results);
    return Exercise.create(data.exercises);
  })
  .then(function (exercises) {
    console.log(exercises);
    return Workout.create(data.workouts);
  })
  .then(function (workouts) {
    console.log(workouts);
    return Promise.all([
      Exercise.findOne({ name: "Bench press" }),
      Workout.findOne({ title: "Workout 1" })
    ]);
  })
  .then(function (results) {
    console.log(results);
    // One day we will destructure the results array
    const benchpress = results[0];
    const workout1 = results[1];
    workout1.list.push(bench);
    return workout1.save();
  })
  .then(process.exit);
