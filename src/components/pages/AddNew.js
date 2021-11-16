import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddGenre from "../movies/AddGenre"

const AddNew = () => {
  const [genre, setGenre] = useState([]);
  const [artist, setArtist] = useState([]);
  useEffect(() => {
    // when the page is loading call loadmovies
    loadGenre();
    loadArtist();
  }, []);

  const loadGenre= async () => {
    const result = await axios.get("http://localhost:3004/genre");
    setGenre(result.data.reverse());
  }
  const loadArtist= async () => {
    const result = await axios.get("http://localhost:3005/artist");
    setArtist(result.data.reverse());
  }
  console.log(genre);
  console.log(artist);
  return (
    <div className="container border shadow my-3 py-4">
      <div className="py-4 ustify-content-center text-center">
        <h1>Create genres</h1>
        <Link
          class="btn btn-primary mr-2 mt-3"
          to={`/genre/new`}
        >
          Add genre
        </Link>
        <hr />
        <h1>Create Artists</h1>
        <Link
          class="btn btn-primary mr-2 mt-3"
          to={`/artist/new`}
        >
          Add Artists
        </Link>
       
      </div>
    </div>
  );
};

export default AddNew;
