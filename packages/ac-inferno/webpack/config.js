const webpack = require('webpack');
const { join, resolve } = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('../package.json');

const common = {
  exclude: [/node_modules/, /__tests__/, /coverage/, /dist/, /examples/]
};

const jsLoader = () => {
  return {
    test: /\.js$/,
    exclude: common.exclude,
    use: ['babel-loader']
  };
};

const flowType = () => {
  return {
    test: /\.js$/,
    exclude: common.exclude,
    enforce: 'pre',
    loader: 'remove-flow-types-loader'
  };
};

let output = () => {
  return {
    filename: '[name].min.js',
    path: resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'acInferno',
    publicPath: '/',
    pathinfo: true
  };
};

const plugins = () => {
  return [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        context: __dirname
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // Better results
    new BabiliPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CleanWebpackPlugin([resolve(__dirname, 'dist')])
  ];
};

const externals = () => {
  return {
    inferno: 'inferno',
    'inferno-compat': 'inferno-compat',
    'inferno-component': 'inferno-component',
    'inferno-create-element': 'inferno-create-element',
    'animate-keyframes': 'animate-keyframes'
  };
};

const resolver = () => {
  return {
    react: 'inferno-compat',
    'react-dom': 'inferno-compat',
    inferno: 'inferno-compat', // Usage with babel-plugin-inferno
    'styled-components': 'inferno-compat'
  };
};

const entry = () => {
  return {
    [pkg.name]: join(__dirname, '../index.js')
  };
};

module.exports = {
  jsLoader,
  output,
  plugins,
  externals,
  entry,
  resolver,
  flowType,
};
