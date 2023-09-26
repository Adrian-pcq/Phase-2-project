import React from "react";

function Home({moviesArray}){

    const shuffled = moviesArray.sort(()=>0.5 - Math.random())
    const display5 = shuffled.slice(0,5)
    return(
        <>
        <h1>What Can You Find Here? </h1>
        <div className="photo-container">
            {display5.map((movie)=>{
                return(
                    <img key={movie.id}
                     src={movie.Poster}/>
                )
            })}
            
        </div>
        <h1>Many Movies of all Kind of Genres</h1>
        </>
    )
}

export default Home;