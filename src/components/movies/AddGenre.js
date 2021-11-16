import React, { useState } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";

const AddGenre = () => {
    let history = useHistory();
    const [genre, setgenre] = useState({
        genreName: "",
        tag: ""
    });
    const { genreName, tag } = genre;

    const onInputChange = e => {
        setgenre({ ...genre, [e.target.name]: e.target.value });
    };
    console.log(genre);
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3004/genre", genre);
        history.push("/addnew");
    };
    return (

        <div className="container my-3">
            <div className="w-75 mx-auto shadow p-5">
                <Link className="btn btn-primary my-3" to="/addnew">
                    Back
                </Link>
                <h1> Genre </h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group">
                        <label for="exampleInputGenre">Add new genre</label>
                        <input type="text" class="form-control" id="exampleInputGenre" placeholder="Enter genre" required
                            name="genreName"
                            value={genreName}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputTag">Add tag</label>
                        <input type="text" class="form-control" id="exampleInputTag" placeholder="tag"
                            name="tag"
                            value={tag}
                            onChange={e => onInputChange(e)} />
                        <small id="help" class="form-text text-muted">Adding a tag is optional </small>
                    </div>

                    <button type="submit" class="btn btn-primary">Add genre!</button>
                </form>

            </div>

        </div>
    )
}

export default AddGenre;