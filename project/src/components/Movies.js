import React from "react";
import Movie from "./Movie";

function Movies({filteredArray}){

    const mappedArray= filteredArray.map(movie=>(<Movie key={""} name={""} year={""} runTime={""} rated={""} released={""}  genre={""} director={""} actors={""} plot={""} awards={""} poster={""} />))
    
    return(
        <div className="card-container">
            {mappedArray}
        </div>)
}

export default Movies;