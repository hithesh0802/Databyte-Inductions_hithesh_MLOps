import React from "react";

const DashBoard=({workouts})=>{
    <div>
        <h2>Recent workouts</h2>
        <ul>
            {workouts.map(workout => (
                <li key= {workout._id} > {workout.type} - {workout.duration} mins</li>
            ))}
        </ul>
    </div>
}

export default DashBoard;