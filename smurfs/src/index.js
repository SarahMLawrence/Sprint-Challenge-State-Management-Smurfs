import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import "./index.css";
import App from "./components/App";

const logger = ({ getState }) => (next) => (action) => {
  console.log("Dispatching action", action);
  next(action);
};

let store = createStore(reducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
