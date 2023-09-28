import React,{useEffect,useState} from "react";
import NavBar from "./NavBar";
import { Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import NewMovie from "./NewMovie";
import MoviesDetails from "./MoviesDetails";

function App() {

  const[moviesArray,setMoviesArray]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/movies")
    .then(resp=>resp.json())
    .then((data)=>(setMoviesArray(data)))
    
},[])

  return (
    <>
      <header>
        <img src="./images/title.png"/>
      </header>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home moviesArray={moviesArray}/>
        </Route>
        <Route exact path="/movies">
          <MoviesDetails 
            moviesArray={moviesArray} 
            setMoviesArray={setMoviesArray}/>
        </Route>
        <Route exact path="/newMovie">
          <NewMovie 
            setMoviesArray={setMoviesArray} 
            moviesArray={moviesArray}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;