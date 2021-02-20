import { combineReducers } from "redux";
import allNews from "./allNews";
import searchResult from "./searchResult";

export default combineReducers({
    allNews,
    searchResult,
});
