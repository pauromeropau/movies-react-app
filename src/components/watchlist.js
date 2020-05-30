import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSeenMovie, deleteMovieAction } from "../redux";

import "./watchlist.css";

const Watchlist = () => {
  const movies = useSelector((state) => state.movies);
  const toggleSeen = useDispatch((movieId) => toggleSeenMovie(movieId));
  const deleteMovie = useDispatch((movieId) => deleteMovieAction(movieId));

  return (
    <div className="movies-container">
      <div className="search-container">
        <h4 className="subtitle">Search</h4>
        <p className="subtitle2">Genre</p>

        <div className="form-radio-container">
          <div className="form-radio">
            <input type="radio" name="genre" value="genre" id="comedy" />
            <label className="form-radio-text" htmlFor="comedy">
              Comedy
            </label>
          </div>

          <div className="form-radio">
            <input type="radio" name="genre" value="genre" id="horror" />
            <label className="form-radio-text" htmlFor="horror">
              Horror
            </label>
          </div>

          <div className="form-radio">
            <input type="radio" name="genre" value="genre" id="coromancemedy" />
            <label className="form-radio-text" htmlFor="romance">
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
      </div>

      <div className="movies-list-container">
      <h4 className="subtitle">Watchlist</h4>
      <ul className="movies-list-not-seen">
        <h3 className="subtitle2">Haven’t Seen</h3>
        {movies.map((movie) => (
          <li key={movie.id} className="movies">
            {" "}
            {!movie.seen ? (
              <div className="not-seen-movie">
                <input
                  type="checkbox"
                  checked={movie.seen}
                  onChange={toggleSeen.bind(null, movie.id)}
                />
                <span className={movie.seen ? "seen-title" : null}>
                  {movie.title}
                </span>
                {movie.genre.map((genre, index) => (
                  <span key={index} className="genre">
                    {genre}
                  </span>
                ))}
                <button
                  className="edit-btn"
                  onClick={() => {
                    console.log("edit");
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={deleteMovie.bind(null, movie.id)}
                >
                  Delete
                </button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <ul className="movies-list-seen">
        <h3 className="subtitle2">Seen</h3>
        {movies.map((movie) => (
          <li key={movie.id} className="movies">
            {" "}
            {movie.seen ? (
              <div className="seen-movie">
                <input
                  type="checkbox"
                  checked={movie.seen}
                  onChange={toggleSeen.bind(null, movie.id)}
                />
                <span className={movie.seen ? "seen-title" : null}>
                  {movie.title}
                </span>
                {movie.genre.map((genre, index) => (
                  <span key={index} className="genre">
                    {genre}
                  </span>
                ))}
                <button
                  className="edit-btn"
                  onClick={() => {
                    console.log("edit");
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={deleteMovie.bind(null, movie.id)}
                >
                  Delete
                </button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Watchlist;
