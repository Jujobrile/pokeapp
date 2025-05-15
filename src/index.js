import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css";
import { pokemonsReducer } from "./Reducers/pokemons.js";
import { applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import { Provider } from "react-redux";
import { logger } from "./middlewares";
import {thunk} from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = compose(
  composeAlt(applyMiddleware(thunk, logger))
);

const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
