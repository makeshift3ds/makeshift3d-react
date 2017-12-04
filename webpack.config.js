const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
};
