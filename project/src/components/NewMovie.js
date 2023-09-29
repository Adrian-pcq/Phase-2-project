import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function NewMovie({setMoviesArray}){

    const history = useHistory();

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
        imdbRating:"",
        movieLink:""
 
    })

    function handleChange(e){
        // console.log(e.target.name)
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        
        
        
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
            imdbRating: formData.imdbRating,
            movieLink: formData.movieLink
            
        }
        
        fetch("http://localhost:3001/movies",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newMovie)
        })
        .then(resp=>resp.json())
        .then(newMovieFromDB => {setMoviesArray(movie => [...movie,newMovieFromDB])})
        // e.target.reset()
        history.push('/movies')
    }
    return(
        <>
        <h2><img src="./images/movieHereYellow.png" alt="Poster"/></h2>
        
        <form className="form"  onSubmit={handleSubmit}>
            <label htmlFor="name">Title:</label>
            <input type="text" name="Title" onChange={handleChange}/>

            <label htmlFor="year">Year:</label>
            <input type="text" name="Year" onChange={handleChange}/>

            <label htmlFor="rated">Rated:</label>
            <input type="text" name="Rated" onChange={handleChange}/>

            <label htmlFor="released">Released:</label>
            <input type="text" name="Released"onChange={handleChange}/>

            <label htmlFor="runtime">Runtime:</label>
            <input type="text" name="Runtime"onChange={handleChange}/>
        
            <label htmlFor="genre">Genre:</label>
            <input type="text" name="Genre"onChange={handleChange}/>

            <label htmlFor="director">Director:</label>
            <input type="text" name="Director"onChange={handleChange}/>

            <label htmlFor="actors">Actors:</label>
            <input type="text" name="Actors"onChange={handleChange}/>

            <label htmlFor="plot">Plot:</label>
            <textarea name="Plot"onChange={handleChange} ></textarea>

            <label htmlFor="awards">Awards:</label>
            <input type="text" name="Awards"onChange={handleChange}/>

            <label htmlFor="poster">Poster:</label>
            <input type="text" name="Poster"onChange={handleChange}/>
            
            <label htmlFor="rottenTomatoes">Rotten Tomatoes:</label>
            <input type="text" name="Rotten Tomatoes"onChange={handleChange}/>

            <label htmlFor="imdb">Imdb Rating:</label>
            <input type="text" name="imdbRating"onChange={handleChange}/>

            <label htmlFor="movieLink">Movie Link:</label>
            <input type="text" name="movieLink"onChange={handleChange}/>

            <input type="submit" value="Add movie"/>
        </form>
        </>
    )
}

export default NewMovie;