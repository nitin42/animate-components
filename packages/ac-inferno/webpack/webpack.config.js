const {
  jsLoader,
  output,
  plugins,
  externals,
  entry,
  resolver,
  flowType,
} = require('./config');

const { join, resolve } = require('path');

// All configurations in ./config.js
module.exports = {
  entry: entry(),
  output: output(),
  devtool: 'cheap-module-source-map',
  cache: true,
  module: {
    rules: [jsLoader(), flowType()]
  },
  target: 'web',
  resolve: {
    modules: [
      resolve(__dirname),
      join(__dirname, 'node_modules')
    ],
    alias: resolver()
  },
  externals: externals(),
  plugins: plugins()
};
