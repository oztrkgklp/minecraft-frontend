import axios from "axios";
import constants from "../util/constants";
import getError from "../util/errors";

class BlogPostService {
    // Get Blog Posts
    getBlogPosts = async () => {
        return axios
            .get(constants.API_DOMAIN + "/blog-posts/")
            .then((response) => response)
            .catch((e) => getError(e));
    };
    // Get a Blog Post By ID.
    getBlogPostById = async (id) => {

        return axios
            .get(constants.API_DOMAIN + "/blog-posts/" + id, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };

    // Update a Blog Post By ID.
    updateBlogPostById = async (id, data) => {
        return axios
            .put(constants.API_DOMAIN + "/blog-posts/" + id, data, {
                headers: {
                    [constants.HEADER.AUTHENTICATION]: "token",
                },
            })
            .then((response) => response)
            .catch((e) => getError(e));
    };
}

export default BlogPostService;
