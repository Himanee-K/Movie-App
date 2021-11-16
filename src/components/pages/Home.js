import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]); //movies is an array
  const [searchTerm, setSearchTerm] = useState(''); //serc
 
  useEffect(() => {
    // when the page is loading call loadmovies
    loadmovies();
  }, []);

  const loadmovies = async () => {
    // fetching the data of movies (data gets stored in db.json)
    const result = await axios.get("http://localhost:3003/movies");
    // data is set to reverse to show latest added movie entry on top
    setMovies(result.data.reverse());
  };

  const deleteUser = async id => {
    //deleting the record based on id
    await axios.delete(`http://localhost:3003/movies/${id}`);
    loadmovies();
  };

  const handleSearch = (event) => {
    //setting the data in searchTerm
    setSearchTerm(event.target.value);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="py-4 dashboard" >List of Movies</h1>
        <label htmlFor="search">
        Search by Movie name or Genre:
        <input className="ml-2 shadow" id="search" type="text" onChange={handleSearch} />
        </label>
       <Link className="btn btn-primary mr-2 my-2 addMovie float-right" to="/movies/add">Add Movie</Link>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th style={{width: "5%"}} scope="col">#</th>
              <th style={{width: "25%"}} scope="col">Title</th>
              <th style={{width: "25%"}} scope="col">Artists</th>
              <th style={{width: "20%"}} scope="col">Genre</th>
              <th style={{width: "25%"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.filter((val) => {
              if(searchTerm == ""){
                return val;
                // search based on name and genre of the movie , and additional case can be added with another OR condition , serach is made case insensitive
              }else if( val.movieName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||  val.genre.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return  val;
              }}).map((movie, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{movie.movieName}</td>
                <td>{movie.actor}</td>
                <td>{movie.genre}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/movies/${movie.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/movies/edit/${movie.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(movie.id)}
                    to={`/`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
