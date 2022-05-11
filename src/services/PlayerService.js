import axios from "axios";
import constants from "../util/constants";
import getError from "../util/errors";

class PlayerService {
    // Get Blog Posts
    getTopPlayers = async () => {
        return axios
            .get(constants.API_DOMAIN + "/top-players/")
            .then((response) => response)
            .catch((e) => getError(e));
    };

}

export default PlayerService;
