import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./ducks";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";

export const store = createStore(
  combineReducers({...reducers, routing: routerReducer, form: formReducer}),
  {},
  applyMiddleware(thunk)
);
