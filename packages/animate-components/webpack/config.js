const webpack = require('webpack');
const { join, resolve } = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('../package.json');

const common = {
  exclude: [
    /node_modules/,
    /__tests__/,
    /docs/,
    /coverage/,
    /dist/,
    /examples/,
    /scripts/,
    /starter/,
  ]
};

const jsLoader = () => {
  return {
    test: /\.js$/,
    exclude: common.exclude,
    use: ['babel-loader']
  };
};

const styleLoader = () => {
  return {
    test: /\.css$/,
    exclude: common.exclude,
    use: ['style-loader', 'css-loader']
  };
};

let output = () => {
  return {
    filename: '[name].min.js',
    path: resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'animateComponents',
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
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    'html-tags': 'html-tags',
    'animate-keyframes': 'animate-keyframes',
    'element-utils': 'element-utils'
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
  styleLoader,
  plugins,
  externals,
  entry
};
