import { createStore } from "redux";
import uuid from "uuid/v4";

const initialState = {
  movies: [
    {
      id: uuid(),
      title: "The Shawshank Redemption",
      genre: ["Romance"],
      seen: true,
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
      seen: false,
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
  window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, payload],
      };
    case "SEEN_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === payload ? { ...movie, seen: !movie.seen } : movie
        ),
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };
    default: 
    return state;
  }
}

export const addMovieAction = (movie) => ({
  type : 'ADD_MOVIE', 
  payload: movie
});

export const seenMovieAction = movieId => ({
  type: 'SEEN_MOVIE',
  payload: movieId
});

export const deleteMovieAction = movieId => ({
  type: 'DELETE_MOVIE',
  payload: movieId
});
