const path = require("path");

const sharedConfig = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: [".js", ".jsx", ".css"],
    devtool: "source-map"
};

module.exports = {
    sharedConfig
};
