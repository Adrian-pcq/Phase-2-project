import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import Search from "./Search";

function MoviesDetails(){

    const[moviesArray,setMoviesArray]=useState([])
    const[searchTerm,setSearchTerm]=useState("")

    useEffect(()=>{
        fetch("")
        .then(resp=>resp.json())
        .then(data=>setMoviesArray(data))
    },[])

    const filteredArray= moviesArray.filter(movie=>(movie.name.toLowerCase().includes(searchTerm.toLowerCase())))

    return(
        <>
        <Search setSearchTerm={setSearchTerm}/>
        <h2>Here the Movies:</h2>
        {moviesArray.length >0 ? <Movies filteredArray={filteredArray}/> : <h1>Loading...</h1>}
        </>
    )
}

export default MoviesDetails;