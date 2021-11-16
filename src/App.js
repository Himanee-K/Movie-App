import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AddNew from "./components/pages/AddNew";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddMovie from "./components/movies/AddMovie";
import EditMovie from "./components/movies/EditMovie";
import Movie from "./components/movies/Movie";
import AddGenre from "./components/movies/AddGenre";
import AddArtist from "./components/movies/AddArtist";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/addnew" component={AddNew} />
          <Route exact path="/movies/add" component={AddMovie} />
          <Route exact path="/movies/edit/:id" component={EditMovie} />
          <Route exact path="/movies/:id" component={Movie} />
          <Route exact path="/genre/new" component={AddGenre} />
          <Route exact path="/artist/new" component={AddArtist} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
