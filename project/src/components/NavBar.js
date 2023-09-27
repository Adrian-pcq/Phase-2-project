import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function NavBar(){
    return(
        <div className="navBar">
        <NavLink exact to="/" >Randomize</NavLink>
        <NavLink exact to="movies">Movies</NavLink>
        <NavLink exact to="newMovie">Add Movie</NavLink>
        </div>
    )
}

export default NavBar;