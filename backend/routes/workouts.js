const express= require('express');
const router = express.Router();
const {getWorkout , addWorkout}= require('../controllers/workoutController') ;

router.post('/',addWorkout);
router.get('/',getWorkout);

module.exports = {router};