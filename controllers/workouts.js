// controllers/workouts.js
var Workout = require('../models/workout');

module.exports = {
    index,
    show,
    new: newWorkout,
    create,
};
function index(req, res) {
    Workout.find({}, function (err, workouts) {
        res.render('workouts/index', { title: 'All Workouts', workouts });
    });
}

function show(req, res) {
    Workout.findById(req.params.id, function (err, workout) {
        res.render('workouts/show', { title: 'Workout Details', workout });
    });
}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'Add Workout' });
}

function create(req, res) {
    Workout.create(req.body)
    res.redirect('/workouts')
};
