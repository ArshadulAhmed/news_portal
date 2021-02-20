import { GET_ERRORS, REMOVE_ERROR } from "./types";

// RETURN ERRORS
export const returnErrors = (msg, status, data) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, data },
    };
};

export const removeReduxError = () => {
    return {
        type: REMOVE_ERROR,
    };
};
