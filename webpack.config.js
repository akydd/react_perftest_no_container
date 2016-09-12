var webpack = require('webpack');

var port = process.env.PORT || 8080;
var host = process.env.IP || '127.0.0.1';

var config = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js$/,
        query: {
            presets: ['es2015', 'react']
        }
      }
    ],
  },
  devServer: {
    host: host,
    port: port
  }
};

module.exports = config;
