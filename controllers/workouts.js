// controllers/workouts.js
// const { deleteOne } = require('../models/exercise');
var Workout = require('../models/workout');
var Exercise = require('../models/exercise');

module.exports = {
    index,
    show,
    new: newWorkout,
    create,
    delete: deleteWorkout,
    edit,
    update
};
function index(req, res) {
    Workout.find({}, function (err, workouts) {
        res.render('workouts/index', { title: 'All Workouts', workouts });
    });
}
function show(req, res) {
    Workout.findById(req.params.id)
    .populate('list').exec(function(err, workout) {
      Exercise.find({_id: {$nin: workout.list}})
      .exec(function(err, exercises) {
        res.render('workouts/show', {
          title: 'Detail', workout, exercises
        });
      });
    });
  }


function newWorkout(req, res) {
    res.render('workouts/new', { title: 'Add Workout' });
}
  
function create(req, res) {
    Workout.create(req.body)
    res.redirect('/workouts')
}

function deleteWorkout(req, res, next) {
    Workout.findOne({
      "workouts._id": req.params.id,
    }).then(function (workout) {
      if (!workout) return res.redirect("/workouts");
      workout.remove(req.params.id);
      workout
      res.redirect('/workouts')
    });
  }

  function update(req, res) {
    Workout.updateOne({ _id: req.params.id }, req.body, function (err, update) {
        res.redirect('/workouts')
    });
  }

function edit(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        res.render('workouts/edit', { title: "Edit Workout", workout});
    });
}
