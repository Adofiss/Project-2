// controllers/performers.js
const Exercise = require('../models/exercise');
const Workout = require('../models/workout');

module.exports = {
    new: newExercise,
    create,
    addToList
};

function addToList(req, res) {
    Workout.findById(req.params.workoutId, function(err, workout) {
        workout.list.push(req.body.exerciseId);
        workout.save(function(err) {
            res.redirect(`/workouts/${workout._id}`);
        });
    });
}


function create(req, res) {
    const s = req.body.time;
    Exercise.create(req.body, function (err, exercise) {
      res.redirect('/exercises/new');
    });
  }

function newExercise(req, res) {
    Exercise
    .find({})
    .sort('name')
    .exec(function (err, exercises) {
        res.render('exercise/new', {
            title: 'Add Exercise',
            exercises
        });
    });
}
