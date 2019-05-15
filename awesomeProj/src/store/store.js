import {createStore, combineReducers, applyMiddleware, compose}  from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from "./reducers/root"

const rootReducer = combineReducers({
  users: userReducer
})

let composeEnhancers = compose;

if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export default () => {
  return createStore(rootReducer, composeEnhancers());
}
