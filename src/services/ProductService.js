import axios from "axios";
import constants from "../util/constants";
import getError from "../util/errors";

// Create a new product
class ProductService {
    // Get a list of products
    getProducts = async () => {
        return axios
            .get(constants.API_DOMAIN + "/products", {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };

        // Get a product.
    getProductById = async (id) => {
        return axios
            .get(constants.API_DOMAIN + "/products/" + id, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };

        // Delete a product
    deleteProductById = async (id) => {
        return axios
            .delete(constants.API_DOMAIN + "/products/" + id, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };

    // Update a product
    updateProductById = async (id, data) => {
        return axios
            .put(constants.API_DOMAIN + "/products/" + id, data, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };

    // Create a new product
    createProduct = async (data) => {
        return axios
            .post(constants.API_DOMAIN + "/products", data, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };

}

export default ProductService;
