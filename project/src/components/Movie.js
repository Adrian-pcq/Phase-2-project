import React, { useState } from "react";

function Movie({ 
  id,
  name, 
  year, 
  runTime, 
  rated, 
  released,  
  genre, 
  director, 
  actors, 
  plot, 
  awards, 
  poster,
  onhandleDelete, 
  imdbRating,
  rottenTomatoes
}){

  const[isClick,setIsClick]=useState(true)
    
  function handleClick(){
    setIsClick(!isClick)
  }
  
  function handleDelete(id){
    fetch(`http://localhost:3001/movies/${id}`,{
            method:"DELETE"
        })
        .then(resp=>resp.json())
        .then(onhandleDelete(id))
  }
  const firstInfo =
    <div >
      
    </div>

  const secondInfo = 
    <div>
      <h3>Title: </h3>
      <p>{name}</p>
      <h3>Year: </h3>
      <p>{year}</p>
      <h3>Rated: </h3>
      <p>{rated}</p>
      <h3>Runtime: </h3>
      <p>{runTime}</p>
      <h3>Genres:</h3>
      <p>{genre}</p>
      <h3>Released: </h3>
      <p>{released}</p>
      <h3>Awards: </h3>
      <p>{awards}</p>
      <h3>Director: </h3>
      <p>{director}</p>
      <h3>Actors: </h3>
      <p>{actors}</p>
      <h3>Ratings: </h3>
      <h3>Rotten Tomatoes</h3>
      <p>{rottenTomatoes}</p>
      <h3>imdbRating</h3>
      <p>{imdbRating}</p>
      <h3>Plot: </h3>
      <p>{plot}</p>
      <button onClick={()=>handleDelete(id)}>DELETE</button>
        
    </div>
    
  
  return(
        <div className="card" >
              <img src={poster} alt={name} onClick={handleClick}/> 
              <div className="card-info">
                {isClick ? firstInfo : secondInfo}
                
                </div>
        </div>
    )
}

export default Movie;
