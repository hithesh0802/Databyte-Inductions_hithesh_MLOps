const mongoose= require('mongoose');
const Schema= mongoose.Schema();

const workoutSchema= new Schema({
    user : {type: Schema.Types.ObjectId , ref:'User' ,required: true},
    type: {type: String ,required: true},
    duration: {type:Number ,required: true},
    calories: {type: Number},
    notes: {type: String},
    date: {type: Date , default: Date.now}
})

module.exports = mongoose.model('Workout', workoutSchema);