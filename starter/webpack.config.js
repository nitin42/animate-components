const webpack = require("webpack");
const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR = ["react", "react-dom", "styled-components"];

module.exports = {
  entry: {
    main: [
      "webpack-dev-server/client?http://0.0.0.0:8080",
      "webpack/hot/only-dev-server",
      join(__dirname, "index.js")
    ],
    vendor: VENDOR
  },
  output: {
    filename: "[name].[hash].js",
    path: resolve(__dirname, "build"),
    publicPath: "/"
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "build"),
    publicPath: "/",
    noInfo: true
  },
  stats: {
    chunks: true,
    chunkModules: true,
    colors: true,
    errors: true,
    errorDetails: true,
    timings: true,
    version: true,
    warnings: true
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: require("html-webpack-template"),
      appMountId: "app"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    })
  ]
};
