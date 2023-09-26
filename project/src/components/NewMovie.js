import React, { useState } from "react";

function NewMovie({setMoviesArray,moviesArray}){

    const [formData,setFormData]=useState({Title:"",Year:"",Runtime:"",Poster:"",Rated:"",Released:"",Genre:"",Actors:"",Director:"",Awards:"",Plot:""})

    function handleChange(e){
        console.log(e.target.name)
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        const newMovie={
            Title: formData.Title,
            Year: parseInt(formData.Year),
            Runtime:formData.Runtime,
            Poster: formData.Poster,
            Rated: formData.Rated,
            Released: formData.Released,
            Genre: formData.Genre,
            Actors: formData.Actors,
            Director: formData.Director,
            Awards: formData.Awards,
            Plot: formData.Plot
        }

        fetch("http://localhost:3000/movies",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newMovie)
            })
        .then(resp=>resp.json())
        .then(newMovieFromDB => {setMoviesArray([...moviesArray,newMovieFromDB])})
    
    }

    return(
        <>
        <h2>Here You Can Add Your Own Movie</h2>
        <form  onSubmit={handleSubmit}>
            <label for="name">Title:</label>
            <input type="text" name="Title" onChange={handleChange} value={formData.Title}/>

            <label for="year">Year:</label>
            <input type="number" name="Year" onChange={handleChange} value={formData.Year}/>

            <label for="rated">Rated:</label>
            <input type="text" name="Rated" onChange={handleChange} value={formData.Rated}/>

            <label for="runtime">Runtime:</label>
            <input type="text" name="Runtime"onChange={handleChange} value={formData.Runtime}/>

            <label for="director">Director:</label>
            <input type="text" name="Director"onChange={handleChange} value={formData.Director}/>

            <label for="actors">Actors:</label>
            <input type="text" name="Actors"onChange={handleChange} value={formData.Actors}/>

            <label for="plot">Plot:</label>
            <textarea name="Plot"onChange={handleChange} value={formData.Plot}></textarea>

            <input type="submit" value="Add movie"/>
        </form>
        </>
    )
}

export default NewMovie;