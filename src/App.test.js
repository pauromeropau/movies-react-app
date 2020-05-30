import React from "react";
import { mount } from "enzyme";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { render, cleanup } from "@testing-library/react";
// import { reducer } from "./redux";

// import Watchlist from "././components/watchlist";
import App from "./App";


// const renderWithRedux = (
//   component,
//   { state, store = createStore(reducer, state) } = {}
// ) => {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//     store,
//   };
// };


describe("App Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("render the title", () => {
    expect(wrapper.find("h1").text()).toContain("Movies");
  });

});


