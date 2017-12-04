const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App'
    })
  ],
  devServer: {
    overlay: {
      errors: true,
      warnings: true
    }
  }
};
