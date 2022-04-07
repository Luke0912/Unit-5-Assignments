const loader = require("css-loader");
const path = require("path");
const paths = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(".", "build"), //folder
    filename: "bundle.js", //file
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
};
