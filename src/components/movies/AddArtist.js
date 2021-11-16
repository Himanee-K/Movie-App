import React, { useState } from "react";
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";
const AddArtist = () => {
    let history = useHistory();
    const [artist, setArtist] = useState({
        artistName: "",
        tag: ""
    });
    const { artistName, tag } = artist;

    const onInputChange = e => {
        setArtist({ ...artist, [e.target.name]: e.target.value });
    };
    console.log(artist);
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3005/artist", artist);
        history.push("/addnew");
    };
    return (

        <div className="container my-3">

            <div className="w-75 mx-auto shadow p-5">
                <Link className="btn btn-primary my-3" to="/addnew">
                    Back
                </Link>
                <h1> Artist </h1>

                <form  onSubmit={e => onSubmit(e)}>
                    <div class="form-group">
                        <label for="exampleInputGenre">Add new Artist name</label>
                        <input type="text" class="form-control" id="exampleInputGenre" placeholder="Enter artist name" 
                        name="artistName"
                        value={artistName}
                        onChange={e => onInputChange(e)} required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputTag">Additional tag</label>
                        <input type="text" class="form-control" id="exampleInputTag" 
                        name="tag"
                        value={tag}
                        onChange={e => onInputChange(e)} placeholder="tag" />
                        <small id="help" class="form-text text-muted">Adding a tag is optional </small>
                    </div>

                    <button type="submit" class="btn btn-primary">Add artist!</button>
                </form>
            </div>

        </div>
    )
}

export default AddArtist;