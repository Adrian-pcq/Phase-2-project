import React from "react";

function NewMovie(){
    return(
        <>
        <form>
            <label for="name">Title:</label>
            <input type="text" name="title"/>

            <label for="year">Year:</label>
            <input type="number" name="year"/>

            <label for="rated">Rated:</label>
            <input type="text" name="rated"/>

            <label for="runtime">Runtime:</label>
            <input type="text" name="runtime"/>

            <label for="director">Director:</label>
            <input type="text" name="director"/>

            <label for="actors">Actors:</label>
            <input type="text" name="actors"/>

            <label for="plot">Plot:</label>
            <textarea name="plot"></textarea>

            <input type="submit" value="Add movie"/>
        </form>
        </>
    )
}

export default NewMovie;