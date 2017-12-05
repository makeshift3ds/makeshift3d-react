/* Components */
const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  DashboardPlugin = require('webpack-dashboard/plugin'),
  merge = require('webpack-merge');

/* Configurations */
const cssConfig = require('./webpack/css.config'),
  devServerConfig = require('./webpack/dev-server.config'),
  extractCssConfig = require('./webpack/extract-css.config'),
  imgConfig = require('./webpack/img.config'),
  sourceMapConfig = require('./webpack/source-maps.config');

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
      }),
      new webpack.NamedModulesPlugin()
    ]
  },
  imgConfig.load()
);

module.exports = env => {
  if (env === 'prod') {
    return merge(
      common,
      extractCssConfig.load(),
      sourceMapConfig.load({ devtool: 'source-map' })
    );
  } else if (env === 'dev') {
    return merge(
      common,
      cssConfig.load(),
      devServerConfig.load(),
      sourceMapConfig.load({ devtool: 'source-map' })
    );
  } else {
    console.error('no env provided to webpack');
  }
};
