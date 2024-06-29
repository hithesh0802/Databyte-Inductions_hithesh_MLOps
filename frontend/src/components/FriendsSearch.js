import api from "../services/api";
import React, { useState } from "react";

const FriendsSearch=()=>{
    const [query,setQuery]= useState('');
    const [results,setResults]= useState([]);


    const handleSearch= async(e)=>{
        e.preventDefault();
        const res= await api.get(`/users?search={query}`);
        setResults(res.data);
    }

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type='text' value={query} placeholder="Search Friends" onChange={e =>{ setQuery(e.target.value)}}></input>
                <input type='text' value={query} placeholder="Search Friends" onChange={e =>{ setQuery(e.target.value)}}></input>
            </form>

            <ul>
                {results.map(result=>(
                    <li key={result.user_id}>{result.username}</li>
                ))}
            </ul>
        </div>
    )
}

export default FriendsSearch;