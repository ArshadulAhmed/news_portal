import axios from "axios";

import {
    FETCH_NEWS_START,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAIL,
} from "../utils/types";

import { baseURL, apiKey } from "../utils/baseURL";

export const fetchNews = () => (dispatch, getState) => {
    dispatch({
        type: FETCH_NEWS_START,
    });
    axios
        .get(`${baseURL}/top-headlines?country=us&apiKey=${apiKey}`)
        .then((res) => {
            console.log({ res });
            dispatch({
                type: FETCH_NEWS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log({ err });
            // dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: FETCH_NEWS_FAIL,
            });
        });
};
