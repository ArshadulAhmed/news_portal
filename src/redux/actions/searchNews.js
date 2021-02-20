import axios from "axios";
import {
    SEARCH_NEWS_START,
    SEARCH_NEWS_SUCCESS,
    SEARCH_NEWS_FAIL,
} from "../utils/types";
import { returnErrors } from "../utils/messages";
import { baseURL, apiKey } from "../utils/baseURL";

export const searchNews = (keyWord) => (dispatch, getState) => {
    dispatch({
        type: SEARCH_NEWS_START,
    });
    axios
        .get(`${baseURL}/everything?q=${keyWord}&apiKey=${apiKey}`)
        .then((res) => {
            dispatch({
                type: SEARCH_NEWS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: SEARCH_NEWS_FAIL,
            });
        });
};
