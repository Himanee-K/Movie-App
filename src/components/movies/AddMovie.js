import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddMovie = () => {
  let history = useHistory();
  const [movie, setUser] = useState({
    movieName: "",
    actor: "",
    genre: "",  
    language: "",
    director: ""
  });
  
  //destructuring the movie object for easy understanding
  const { movieName, actor, genre, language, director } = movie;
  const onInputChange = e => {
    setUser({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/movies", movie);
    history.push("/");
  };
  
  return (
    <div className="container my-3">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Movie</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label class="form-label">Movie Title</label>
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Movie Name"
              name="movieName"
              value={movieName}
              onChange={e => onInputChange(e)}
              required={true}
            />
            <div class="valid-feedback">
            Please provide a movie name
            </div>
          </div>
          <div className="form-group">
          <label class="form-label">Movie Actors</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Actors"
              name="actor"
              value={actor}
              onChange={e => onInputChange(e)}
              required={true}
            />
          </div>
          <div className="form-group">
          <label class="form-label">Genre</label>
            <select class="form-control form-control-lg" name="genre"
              value={genre}
              onChange={e => onInputChange(e)}
              required={true}>
              <option value="" selected disabled hidden>Please select Genre</option>
              <option>Comedy</option>
              <option>Romance</option>
              <option>Thriller</option>
              <option>Sci-fi</option>
            </select>
            <small id="help" class="form-text text-muted">Select one from the dropdown </small>
          </div>
          <div className="form-group">
          <label class="form-label">Language</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Langauge"
              name="language"
              value={language}
              onChange={e => onInputChange(e)}
              required={true}
            />
          </div>
          <div className="form-group">
          <label class="form-label">Movie Director</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter directors name"
              name="director"
              value={director}
              onChange={e => onInputChange(e)}
              required={true}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
