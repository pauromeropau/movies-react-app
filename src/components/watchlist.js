import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { seenMovieAction, deleteMovieAction } from "../redux";

import "./watchlist.css";

export default () => {
  const movies = useSelector((state) => state.movies);
  const seenMovie = useDispatch((movieId) => seenMovieAction(movieId));
  const deleteMovie = useDispatch((movieId) => deleteMovieAction(movieId));

  return (
    <div className="movies-list-container">
      <h4 className="subtitle">Search</h4>
      <p className="subtitle2">Genre</p>

      <div className="form-radio-container">
        <div className="form-radio">
          <input type="radio" name="genre" value="genre" id="comedy" />
          <label className="form-radio-text" for="comedy">
            Comedy
          </label>
        </div>

        <div className="form-radio">
          <input type="radio" name="genre" value="genre" id="horror" />
          <label className="form-radio-text" for="horror">
            Horror
          </label>
        </div>

        <div className="form-radio">
          <input type="radio" name="genre" value="genre" id="coromancemedy" />
          <label className="form-radio-text" for="romance">
            Romance
          </label>
        </div>

        <button className="reset-btn">Reset</button>
      </div>

      <p className="subtitle2">Title</p>
      <input
        className="form-input"
        type="text"
        name="title"
        placeholder="Add title"
        // value={movie}
        // onChange={onChange}
      />
      <button className="submit-btn" type="submit">
        Search movie
      </button>
      <ul className="movies-list-not-seen">
        <h4 className="subtitle">Watchlist</h4>
        <h3 className="subtitle2">Haven’t Seen</h3>
        {movies.map((movie) => (
          <li key={movie.id} className="movie">
            {" "}
            <input
              type="checkbox"
              checked={movie.seen}
              onChange={seenMovie.bind(null, movie.id)}
            />
            <span className={movie.seen ? "seen-title" : null}>{movie.title}</span>
            {movie.genre.map((genre,index)=>(<span key={index} className="genre">{genre}</span>))}
            <button
              className="edit-btn"
              onClick={deleteMovie.bind(null, movie.id)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={deleteMovie.bind(null, movie.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h3 className="subtitle2">Seen</h3>

    </div>
  );
};
