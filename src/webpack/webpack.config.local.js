const Dotenv = require("dotenv-webpack");
const path = require("path"); // to get the current path
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
    const environment = path.resolve(__dirname, "..", "..", "config", '.env.local');
    const PORT = 3000 ;
    return {
        mode: "development",
        entry: [path.join(__dirname, "../index.js")],
        module: {
            rules: [
                {
                    test: /\.(js)?$/,
                    exclude: /node_modules/,
                    use: [{ loader: "babel-loader" }],
                },
                {
                    test: /\.css$/,
                    use: [{ loader: "style-loader" }, { loader: "css-loader", options: { url: false } }],
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/i,
                    use: [{ loader: "file-loader", options: { esModule: false } }],
                },
            ],
        },
        stats: {
            colors: true,
            chunks: false,
        },
        plugins: [
            new Dotenv({
                path: environment, // Path to .env file (this is the default)
                safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "../../public/index.html"),
            }),
        ],
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        },
        output: {
            publicPath: '/'
        },
        devServer: {
            static: {
                directory: path.join(__dirname, "..", "..", "public"),
            },
            compress: true,
            client: {
                logging: "none",
            },
            port: PORT,
            allowedHosts: "all"
        },
    };
};
