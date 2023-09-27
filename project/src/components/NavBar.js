import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className="navBar">
        <NavLink exact to="/" >Home</NavLink>
        <NavLink exact to="movies">Movies</NavLink>
        <NavLink exact to="newMovie">Add Movie</NavLink>
        </div>
    )
}

export default NavBar;