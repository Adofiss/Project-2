// routes/exercise.js
const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const isLoggedIn = require('../config/auth');

router.get('/exercises/new', isLoggedIn, exercisesCtrl.new);
// router.post('/exercises', isLoggedIn, exercisesCtrl.create);
router.post('/workouts/:workoutId/exercises', isLoggedIn, exercisesCtrl.addToList)

module.exports = router;
