import axios from "axios";
import constants from "../util/constants";
import getError from "../util/errors";

class BalanceService {
        // Get balance by id
    getBalanceById = async (id) => {
        return axios
            .get(constants.API_DOMAIN + "/balance/" + id, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
            
    };

    // Update a balance
    updateBalanceById = async (id, data) => {
        return axios
            .put(constants.API_DOMAIN + "/balance/" + id, data, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };

}

export default BalanceService;
