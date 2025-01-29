import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import billReducers from "./reducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  billReducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
