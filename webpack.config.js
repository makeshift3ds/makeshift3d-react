/* eslint no-console: 0 */
/* Components */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const merge = require('webpack-merge');

/* Configurations */
const cssConfig = require('./webpack/css.config');
const devServerConfig = require('./webpack/dev-server.config');
const extractCssConfig = require('./webpack/extract-css.config');
const imgConfig = require('./webpack/img.config');
const sourceMapConfig = require('./webpack/source-maps.config');
const cleanConfig = require('./webpack/clean.config');
const uglifyConfig = require('./webpack/uglify.config');

/* Paths */
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

/* Common Configuration */
const common = merge(
  {
    entry: {
      app: PATHS.src
    },
    output: {
      path: PATHS.build,
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
      sourceMapConfig.load({ devtool: 'source-map' }),
      cleanConfig.load({
        root: process.cwd(),
        path: PATHS.build
      }),
      uglifyConfig.load()
    );
  } else if (env === 'dev') {
    return merge(
      common,
      cssConfig.load(),
      devServerConfig.load(),
      sourceMapConfig.load({ devtool: 'source-map' }) // can use breakpoints with source-map
    );
  }
  console.error('BUILD FAILED: env variable not provided to webpack config');
  process.exit();
  return;
};
