import React from "react";
import Search from "./Search"; 

function Movies(){
    return(
        <>
        <Search/>
        <h2>Here the Movies:</h2>
        <div className="card-container">
            {/* mapped movie array */}
        </div>
        </>)
}

export default Movies;