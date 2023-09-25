import React from "react";
import NavBar from "./NavBar";
import { Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import Movies from "./Movies";
import NewMovie from "./NewMovie";
import MoviesDetails from "./MoviesDetails";

function App() {
  return (
    <>
      <header>Wellcome to Movie Lovers!!!</header>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/movies">
          <MoviesDetails />
        </Route>
        <Route exact path="/newMovie">
          <NewMovie/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
