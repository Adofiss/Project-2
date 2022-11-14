// controllers/exercises.js
var Exercise = require('../models/exercise');
var Workout = require('../models/workout');

module.exports = {
    new: newExercise,
    create,
    addToList
};

function addToList(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        workout.list.push(req.body.exerciseId);
        workout.save(function(err) {
            res.redirect(`/workouts/${workout._id}`);
        });
    });
}

function create(req, res) {
    Exercise.create(req.body, function(err, exercise) {
      res.redirect('/exercises/new');
    });
  }

  function newExercise(req, res) {
    Exercise.find({}, function(err, exercises) {
      res.render('exercises/new', {
        title: 'Add Exercise',
        exercises
      });
    })
  }