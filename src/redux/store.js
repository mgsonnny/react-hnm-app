import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";
import { configureStore } from "@reduxjs/toolkit";

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// combinereducer
// thunk
// applyMiddleware
// composeWithDevTools
// index.js -> combinereducer 지워도 됨.

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
