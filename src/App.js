import React from "react";

import { Provider } from "react-redux";
import { store } from "./redux";

import Form from "./components/form";
import Watchlist from "./components/watchlist";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <h1 className="title">Movies</h1>
        <Form />
        <Watchlist />
      </div>
    </Provider>
  );
}

export default App;
