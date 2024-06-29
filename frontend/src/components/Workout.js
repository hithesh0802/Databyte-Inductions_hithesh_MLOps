import api from '../services/api'
import React,{useState} from 'react'

const Workout=()=>{
    const [type,setType]= useState('');
    const [duration,setDuration] = useState('');
    const [calories,setCalories]= useState('');
    const [notes,setNotes] = useState('');

    const handleSumbit= async(e)=>{
        e.preventDefault();
        const workout={type,duration,calories,notes};
        await api.post('/workouts',workout);
        setCalories('');
        setDuration('');
        setNotes('');
        setType('');
    }

    return (
        <form onSubmit={handleSumbit}>
            <input type='text' placeholder='Type' value={type} onChange={e=>{setType(e.target.value)}} ></input>;
            <input type='number' placeholder='Calories' value={calories} onChange={e=>{setCalories(e.target.value)}} ></input>;
            <input type='number' placeholder='Duration' value={duration} onChange={e=>{setDuration(e.target.value)}} ></input>;
            <input type='text' placeholder='Notes' value={notes} onChange={e=>{setNotes(e.target.value)}} ></input>;
            <button type="submit">Log in a Workout</button>
        </form>
    )
}

export default Workout;