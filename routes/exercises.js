// routes/exercise.js
const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const isLoggedIn = require('../config/auth');

router.get('/exercises/new', isLoggedIn, exercisesCtrl.new);
router.post('/exercises', isLoggedIn, exercisesCtrl.create);
router.post('/workouts/:workoutId/exercises', isLoggedIn, exercisesCtrl.addToList)
router.post('/workouts/:id/exercises', exercisesCtrl.create);
router.post('/workouts/:id/exercises', exercisesCtrl.addToList);
router.get('/exercises/new', exercisesCtrl.new);
router.post('/exercises', exercisesCtrl.create)


module.exports = router;
