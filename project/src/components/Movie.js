import React from "react";

function Movie({ name, year, runTime, rated, released,  genre, director, actors, plot, awards, poster}){


  
    return(
        <div className="card">
              <img src={poster} alt={name} /> 
              <div className="card-info">
                <h3>Title: {name}</h3>
                <h3>Year: {year}</h3>
                <h3>Rated: {rated}</h3>
                <h3>Runtime: {runTime}</h3>
                <h3>Genres:</h3>
                <p>{genre}</p>
                <h3>Released: {released}</h3>
                <h3>Awards: {awards}</h3>
                <h3>Director: </h3>
                <p>{director}</p>
                <h3>Actors: </h3>
                <p>{actors}</p>
                <h3>Ratings: </h3>
                <p>{}</p>
                <h3>Plot: </h3>
                <p>{plot}</p>
              </div>
        </div>
    )
}

export default Movie;

