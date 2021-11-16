import React, { useState, useEffect } from "react";
import {useHistory, Link, useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  let history = useHistory();
  const [movie, setUser] = useState({
    movieName: "",
    actor: "",
    genre: "",
    language: "",
    director: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  
  
  const loadUser = async () => {
    try {
    const res = await axios.get(`http://localhost:3003/movies/${id}`);
    setUser(res.data);
    } catch (err) {
      history.push("/");
  } 
  };
  return (
    <div className="container border shadow my-3 py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4 mt-3">Movie id: {id}</h1>
      <hr />
      <ul className="list-group w-50 py-3">
        <li className="list-group-item">Title: {movie.movieName}</li>
        <li className="list-group-item">Actors: {movie.actor}</li>
        <li className="list-group-item">Genre: {movie.genre}</li>
        <li className="list-group-item">Langauge: {movie.language}</li>
        <li className="list-group-item">Director: {movie.director}</li>
      </ul>
    </div>
  );
};

export default Movie;
