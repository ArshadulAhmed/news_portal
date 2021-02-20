import axios from "axios";

import {
    SEARCH_NEWS_START,
    SEARCH_NEWS_SUCCESS,
    SEARCH_NEWS_FAIL,
} from "../utils/types";

import { baseURL, apiKey } from "../utils/baseURL";

export const searchNews = (keyWord) => (dispatch, getState) => {
    dispatch({
        type: SEARCH_NEWS_START,
    });
    axios
        .get(`${baseURL}/everything?q=${keyWord}&apiKey=${apiKey}`)
        .then((res) => {
            console.log({ res });
            dispatch({
                type: SEARCH_NEWS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log({ err });
            // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: SEARCH_NEWS_FAIL,
            });
        });
};
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=88269524c2954685bc288ddd95aceff6
