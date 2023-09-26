import React, { useState } from "react";
import Movies from "./Movies";
import Search from "./Search";

function MoviesDetails({moviesArray,setMoviesArray}){

    const[searchTerm,setSearchTerm]=useState("")

    const filteredArray= moviesArray.filter(movie=>(movie.Title.toLowerCase().includes(searchTerm.toLowerCase())))

    function handleDelete(id){

       const deletedMovie = filteredArray.filter(movie=> movie.id !== id)
        setMoviesArray(deletedMovie)
    }

    return(
        <>
        <Search setSearchTerm={setSearchTerm}/>
        <h2>Here the Movies:</h2>
        {moviesArray.length >0 ? <Movies filteredArray={filteredArray} handleDelete={handleDelete} /> : <h1>Loading...</h1>}
        </>
    )
}

export default MoviesDetails;