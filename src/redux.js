import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createPromise } from 'redux-promise-middleware'
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

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      state = {
        ...state,
        movies: [...state.movies, action.payload],
      };
      break;
    case "SEEN_MOVIE":
      state = {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload ? { ...movie, seen: !movie.seen } : movie
        ),
      };
      break;
    case "DELETE_MOVIE":
      state = {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
      break;

      default:
        return state;
  }
  return state;
};

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(createPromise(), thunk,)))
;


export function addMovieAction(movie) {
  return {
    type: "ADD_MOVIE",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(movie);
      }, 3000);
    }),
  };
}

export function toggleSeenMovie(movieId) {
  return {
    type: "SEEN_MOVIE",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(movieId);
      }, 3000);
    }),
  };
}

export function deleteMovieAction(movieId) {
  return {
    type: "DELETE_MOVIE",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(movieId);
      }, 3000);
    }),
  };
}
