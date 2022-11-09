// controllers/reviews.js
const Workout = require('../models/workout');

module.exports = {
    create,
    delete: deleteReview
};

function deleteReview(req, res, next) {
    Workout.findOnew({'reviews._id': req.params.id}).then(function(workout) {
        const review = workout.reviews.id(req.params.id);
        if (!review.user.equals(req.user._id)) return res.redirect(`/workouts/${workouts._id}`);
        review.remove();
        workout.save().then(function() {
            res.redirect(`/workouts/${workout._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}

function create(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        workout.reviews.push(req.body);
        workout.save(function(err) {
            res.redirect(`/workouts/${workout._id}`);
        });
    });
}
