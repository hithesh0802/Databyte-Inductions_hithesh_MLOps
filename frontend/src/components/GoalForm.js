import api from '../services/api'
import React, { useState } from 'react'

const GoalForm=()=>{
    const [target,setTarget]= useState('');
    const [deadline,setDeadline]= useState('');
    const [description,setDescription]= useState('');

    const handleSumbit= async (e)=>{
        e.preventDefault;
        const goal={description,target,deadline};
        await api.post('/goals',goal);
        setDeadline('');
        setDescription('');
        setTarget('');
    }

    return(
        <form onSubmit={handleSumbit}>
            <input type='text' value={description} placeholder='Description' onChange={e=>{setDescription(e.target.value)}}></input>
            <input type='number' value={target} placeholder='Target' onChange={e=>{setTarget(e.target.value)}}></input>
            <input type='date' value={deadline} placeholder='DeadLine' onChange={e=>{setDeadline(e.target.value)}}></input>
            <button type='submit'>Set Goal</button>
        </form>
    )
}

export default GoalForm;