import { combineReducers } from "redux";
import allNews from "./allNews";
import searchResult from "./searchResult";
import errors from "./errors";

export default combineReducers({
    allNews,
    searchResult,
    errors,
});
