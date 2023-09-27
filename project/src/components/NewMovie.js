import React, { useState } from "react";

function NewMovie({setMoviesArray}){

    const [formData,setFormData]=useState({
        Title:"",
        Year:"",
        Rated:"",
        Released:"",
        Runtime:"",
        Genre:"",
        Director:"",
        Actors:"",
        Plot:"",
        Awards:"",
        Poster:"",
        ["Rotten Tomatoes"]:"",
        imdbRating:""
 
    })

    function handleChange(e){
        // console.log(e.target.name)
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        // console.log(e)

        const newMovie={
            Title: formData.Title,
            Year: formData.Year,
            Rated: formData.Rated,
            Released: formData.Released,
            Runtime:formData.Runtime,
            Genre: formData.Genre,
            Director: formData.Director,
            Actors: formData.Actors,
            Plot: formData.Plot,
            Awards: formData.Awards,
            Poster: formData.Poster,
            ["Rotten Tomatoes"]: formData["Rotten Tomatoes"],
            imdbRating: formData.imdbRating

        }

        fetch("http://localhost:3001/movies",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newMovie)
            })
        .then(resp=>resp.json())
        .then(newMovieFromDB => {setMoviesArray(movie => [...movie,newMovieFromDB])})
    
    }

    return(
        <>
        <h2>Add Movie Here</h2>
        <form  onSubmit={handleSubmit}>
            <label for="name">Title:</label>
            <input type="text" name="Title" onChange={handleChange}/>

            <label for="year">Year:</label>
            <input type="text" name="Year" onChange={handleChange}/>

            <label for="rated">Rated:</label>
            <input type="text" name="Rated" onChange={handleChange}/>

            <label for="released">Released:</label>
            <input type="text" name="Released"onChange={handleChange}/>

            <label for="runtime">Runtime:</label>
            <input type="text" name="Runtime"onChange={handleChange}/>
        
            <label for="genre">Genre:</label>
            <input type="text" name="Genre"onChange={handleChange}/>

            <label for="director">Director:</label>
            <input type="text" name="Director"onChange={handleChange}/>

            <label for="actors">Actors:</label>
            <input type="text" name="Actors"onChange={handleChange}/>

            <label for="plot">Plot:</label>
            <textarea name="Plot"onChange={handleChange} ></textarea>

            <label for="awards">Awards:</label>
            <input type="text" name="Awards"onChange={handleChange}/>

            <label for="poster">Poster:</label>
            <input type="text" name="Poster"onChange={handleChange}/>
            
            <label for="rottenTomatoes">Rotten Tomatoes:</label>
            <input type="text" name="Rotten Tomatoes"onChange={handleChange}/>

            <label for="imdb">Imdb Rating:</label>
            <input type="text" name="imdbRating"onChange={handleChange}/>

            <input type="submit" value="Add movie"/>
        </form>
        </>
    )
}

export default NewMovie;