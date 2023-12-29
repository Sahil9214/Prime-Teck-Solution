import { legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer as primeReducer } from "./redux/reducer";

export const store = legacy_createStore(primeReducer, applyMiddleware(thunk));
