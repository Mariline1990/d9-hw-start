import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import favoriteReducer from "../reducers/Favorite";

const Store = createStore(favoriteReducer, applyMiddleware(thunk));

export default Store;
