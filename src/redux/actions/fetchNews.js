import axios from "axios";
import {
    FETCH_NEWS_START,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAIL,
} from "../utils/types";
import { returnErrors } from "../utils/messages";
import { baseURL, apiKey } from "../utils/baseURL";

export const fetchNews = (country) => (dispatch) => {
    dispatch({
        type: FETCH_NEWS_START,
    });
    axios
        .get(`${baseURL}/top-headlines?country=${country}&apiKey=${apiKey}`)
        .then((res) => {
            dispatch({
                type: FETCH_NEWS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: FETCH_NEWS_FAIL,
            });
        });
};
