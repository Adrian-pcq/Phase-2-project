import React, { useState } from "react";
import Movies from "./Movies";
import Search from "./Search";

function MoviesDetails({moviesArray,setMoviesArray}){

    
    const[searchTerm,setSearchTerm]=useState("")

    
    // console.log(moviesArray.filter(m=>!m.imdbRating))

    const filteredArray= moviesArray.filter(movie=>(
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.Year.includes(searchTerm) ||
        movie.Actors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.Director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.Genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.Plot.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie["Rotten Tomatoes"].includes(searchTerm) ||
        movie.imdbRating.includes(searchTerm)
        ))

    // console.log(filteredArray) 
    
    function handleDeleteMovie(id){

       const deletedMovie = filteredArray.filter(
        movie=> movie.id !== id)
        setMoviesArray(deletedMovie)
    }

    return(
        <>
        <Search setSearchTerm={setSearchTerm}/>
        <h2><img src="./images/search.png"/></h2>
        {moviesArray.length >0 ? 
            <Movies 
            filteredArray={filteredArray} 
            onhandleDelete={handleDeleteMovie}
            // deletedMovie={deletedMovie} 
        /> : <h1>Loading...</h1>}
        </>
    )
}

export default MoviesDetails;