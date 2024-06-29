import { useEffect, useState } from "react";
import React from "react";
import Dashboard from '../components/DashBoard';
import Workout from '../components/Workout' ;
import api from '../services/api';

const HomePage =()=>{
    const [workouts, setWorkouts] = useState([]);

    useEffect(()=>{
        api.get('/workouts').then(response => setWorkouts(response.data));
    },[]);

    return (
        <div>
            <Dashboard workouts={workouts} />
            <Workout />
        </div>
    );
}

export default HomePage ;
