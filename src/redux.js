import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import uuid from "uuid/v4";

const initialState = {
  movies: [
    {
      id: uuid(),
      title: "The Shawshank Redemption",
      genre: ["Romance"],
      seen: false,
    },
    {
      id: uuid(),
      title: "The Godfather",
      genre: ["Romance", "Comedy"],
      seen: false,
    },
    {
      id: uuid(),
      title: "The Dark Knight",
      genre: ["Horror"],
      seen: false,
    },
    {
      id: uuid(),
      title: "Pulp Fiction",
      genre: ["Comedy", "Horror"],
      seen: true,
    },
    {
      id: uuid(),
      title: "Inception",
      genre: ["Romance", "Comedy"],
      seen: false,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "SEEN_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload 
          ? { ...movie, seen: !movie.seen } 
          : movie
        ),
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    default: 
    return state;
  }
}

export const addMovieAction = (movie) => ({
  type : 'ADD_MOVIE', 
  payload: movie
});

export const toggleSeenMovie = (movieId) => ({
  type: 'SEEN_MOVIE',
  payload: movieId
});

export const deleteMovieAction = (movieId) => ({
  type: 'DELETE_MOVIE',
  payload: movieId
});
