import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const EditMovie = () => {
  let history = useHistory();
  const { id } = useParams();
  const [movie, setUser] = useState({
    movieName: "",
    actor: "",
    genre: "",
    language: "",
    director: ""
  });

  const { movieName, actor, genre, language, director } = movie;
  const onInputChange = e => {
    setUser({ ...movie, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/movies/${id}`, movie);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/movies/${id}`);
    setUser(result.data);
    
  };
  
  return (
    <div className="container my-3">
      <div className="w-75 mx-auto shadow p-5">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
        <h2 className="text-center mb-4">Edit Movie</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="movieName"
              value={movieName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="actor"
              value={actor}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
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
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="language"
              value={language}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your director Name"
              name="director"
              value={director}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Movie</button>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;
