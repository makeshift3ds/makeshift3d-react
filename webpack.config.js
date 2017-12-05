/* Components */
const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  Webpack = require('webpack'),
  DashboardPlugin = require('webpack-dashboard/plugin');
merge = require('webpack-merge');

/* Configurations */
const cssConfig = require('./webpack/css.config'),
  devServerConfig = require('./webpack/dev-server.config');

/* Common Configuration */
const common = merge(
  {
    entry: {
      app: path.join(__dirname, 'src')
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
    ]
  },
  cssConfig.load()
);

const production = merge(common, {});

const development = merge(common, devServerConfig.load());

module.exports = env => {
  if (env === 'prod') {
    return production;
  }

  if (env === 'dev') {
    return development;
  }
};
// merge(common, cssConfig.load());
