import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function NavBar(){
    return(
        <div className="navBar">
        <NavLink exact to="/" ><img src="./images/randomizeYellow.png"/></NavLink>
        <NavLink exact to="movies"><img src="./images/AllMoviesYellow.png"/></NavLink>
        <NavLink exact to="newMovie"><img src="./images/CreateMovieYellow.png"/></NavLink>
        </div>
    )
}

export default NavBar;