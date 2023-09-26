import React from "react";
import Movie from "./Movie";

function Movies({filteredArray,onhandleDelete}){

    const mappedArray= filteredArray.map(movie=>(<Movie key={movie.id} id={movie.id} name={movie.Title} year={movie.Year} runTime={movie.Runtime} rated={movie.Rated} released={movie.Released}  genre={movie.Genre} director={movie.Director} actors={movie.Actors} plot={movie.Plot} awards={movie.Awards} poster={movie.Poster} onhandleDelete={onhandleDelete}/>))
    
    return(

        <div className="card-container">
            {mappedArray}
        </div>)
}

export default Movies;