var webpack = require('webpack')
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/react/public');
var APP_DIR = path.resolve(__dirname, 'src/react/app');

var config = {
  entry: APP_DIR + '/main.jsx',
  mode : 'development',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        include: APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", '.jsx', '*']
  }
};

module.exports = config;
