import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const LoginPage=({history})=>{
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const navigate= useNavigate();

    const handleSumbit= async(e)=>{
        e.preventDefault();
        try{
        const res= await api.post('/auth/login', {email,password});
        localStorage.setItem('token',res.data.token);
        history.push('/');
        navigate('/dashboard');
        }catch(err){
            console.log('login failed!');
        }
    }

    return(
        <form onSubmit={handleSumbit}>
            <input type='email' value={email} placeholder="Enter Email" onSubmit={(e)=>{setEmail(e.target.value)}} />
            <input type='password' value={password} placeholder="Enter password" onSubmit={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage;