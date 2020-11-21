import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./reducer/authReducer";
import reducer from "./reducer/reducer";
//import thunk from "redux-thunk"


const rootReducer = combineReducers({ app: reducer, auth: authReducer });

const logger = () => next => action => {
  console.log("logger 1 dispatching action:", action);
  return next(action);
};

const thunk = (args) => ({ getState, dispatch }) => (next) => (action) => {
  console.log("inside thunk");
  if (typeof action === "function") {
    return action(dispatch, getState, args);
  }
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk(), logger))
);

