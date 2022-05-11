import axios from "axios";
import constants from "../util/constants";
import getError from "../util/errors";

class GameService {
    // Get Blog Posts
    getGames = async () => {
        return axios
            .get(constants.API_DOMAIN + "/games/")
            .then((response) => response)
            .catch((e) => getError(e));
    };
    // Get a Blog Post By ID.
    getGameById = async (id) => {

        return axios
            .get(constants.API_DOMAIN + "/games/" + id, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };

    // Update a Blog Post By ID.
    updateGameById = async (id, data) => {
        return axios
            .put(constants.API_DOMAIN + "/games/" + id, data, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };
}

export default GameService;
