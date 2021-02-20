import {
    SEARCH_NEWS_START,
    SEARCH_NEWS_SUCCESS,
    SEARCH_NEWS_FAIL,
} from "../utils/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_NEWS_START:
            return {
                ...state,
                ...action.payload,
                isLoading: true,
            };

        case SEARCH_NEWS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        case SEARCH_NEWS_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
}
