import axios from "axios";
import constants from "../util/constants";
import getError from "../util/errors";

// Returns the VipDetails service.
class VipDetailsService {
    // Get the vip details.
    getVipDetails = async () => {
        return axios
            .get(constants.API_DOMAIN + "/vip-details", {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
            
    };
}

export default VipDetailsService;