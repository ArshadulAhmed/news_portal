import {
    FETCH_NEWS_START,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAIL,
} from "../utils/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_NEWS_START:
            return {
                ...state,
                ...action.payload,
                isLoading: true,
            };

        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        case FETCH_NEWS_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
}
