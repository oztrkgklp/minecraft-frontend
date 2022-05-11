const config_ = require("./webpack.config.local.js");
const path = require("path");
const Dotenv = require("dotenv-webpack");

const devConfig = () => {
    const config = config_();

    config.plugins[0] = new Dotenv({
        path: path.resolve(__dirname, "..", "..", "config", ".env.production"),
    });

    return config;
};

module.exports = devConfig();