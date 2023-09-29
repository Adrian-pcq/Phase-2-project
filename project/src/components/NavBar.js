import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className="navBar">
        <NavLink exact to="/" ><img src="./images/randomizeYellow.png" alt="Poster"/></NavLink>
        <NavLink exact to="movies"><img src="./images/AllMoviesYellow.png" alt="Poster"/></NavLink>
        <NavLink exact to="newMovie"><img src="./images/CreateMovieYellow.png" alt="Poster"/></NavLink>
        </div>
    )
}

export default NavBar;