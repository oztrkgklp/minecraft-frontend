import constants from "./constants";

// Gets the error message from the response.
const getError = (error) => {

    // Backend error
    if (error && error.response && error.response.data && error.response.data.message) {
        return error.response.data.message;
    }
    // Unknown error
    else {
        return constants.ERRORS.UNKNOWN;
    }
}

export default getError;