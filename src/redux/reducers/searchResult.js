import {
    SEARCH_NEWS_START,
    SEARCH_NEWS_SUCCESS,
    SEARCH_NEWS_FAIL,
    REMOVE_SEARCH_RESULT,
} from "../utils/types";

const initialState = {
    results: {},
};

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
                // ...action.payload,
                results: action.payload,
                isLoading: false,
            };
        case SEARCH_NEWS_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        case REMOVE_SEARCH_RESULT:
            return {
                ...state,
                results: {},
                isLoading: false,
            };

        default:
            return state;
    }
}
