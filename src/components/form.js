import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAction } from "../redux";

import uuid from "uuid/v4";

import "./form.css";

export default () => {
  const [title, setMovie] = useState("");
  const [genre] = useState([]);
  
  const dispatch = useDispatch();
  const addMovie = (movie) => dispatch(addMovieAction(movie));

  const onChange = (event) => {
    setMovie(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") return;
    addMovie({
      id: uuid(),
      title: title,
      genre: ['Comedy'],
      seen: false,
    });
    setMovie("");
  };

  return (
    <div className="form-container" >
      <form onSubmit={onSubmit}>
        
        <div className="form-div">
        <h4 className="subtitle">New movie</h4>
        <p className="subtitle2">Title</p>
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Add title"
            value={title}
            onChange={onChange}
          />
          <p className="subtitle2">Genre</p>
          <input
            className="form-input"
            type="text"
            name="genre"
            placeholder="Add genre"
            value={[genre]}
            onChange={onChange}
          />
          <button className="submit-btn" type="submit">
            Add to watchlist
          </button>
        </div>
      </form>
    </div>
  );
};
