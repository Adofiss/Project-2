require('./config/database')
const Workout = require('./models/workout');
const Exercise = require('./models/exercise');

let W;
let E;

Workout.findOne({}, function(err, workout) {
  W = workout;
});

Exercise.findOne({}, function(err, workout) {
    E = workout;
  });
  