import React from "react";

function Home({moviesArray}){

    const shuffled = moviesArray.sort(()=>0.5 - Math.random())
    const display5 = shuffled.slice(0,5)
    
    return(
        <>

        <h1><img src="./images/randomOrderRed.png"/></h1>
        <div className="card-container">
            
            {display5.map((movie)=>{
                return(
                    <div className="card">
                    <img key={movie.id}
                     src={movie.Poster}/>
                     </div>
                )
            })}
            
        </div>
        <h1><img src="./images/clickAll.png"/></h1>
        </>
    )
}

export default Home;