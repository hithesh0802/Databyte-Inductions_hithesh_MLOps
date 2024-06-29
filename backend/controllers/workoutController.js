const Workout= require('../models/Workout');

const getWorkout = async(request,response) =>{
    const workouts = await Workout.find({user: request.user.id});
    response.json(workouts);
}

const addWorkout = async(req,res) =>{
    const NewWorkout = new Workout({
        user: req.user.id ,
        ...req.body
    });
    const saveWorkout = await NewWorkout.save();
    res.json(saveWorkout);
}

module.exports= {getWorkout,addWorkout} ;