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
  sourceMapConfig = require('./webpack/source-maps.config'),
  cleanConfig = require('./webpack/clean.config');

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
      })
    );
  } else if (env === 'dev') {
    return merge(
      common,
      cssConfig.load(),
      devServerConfig.load(),
      sourceMapConfig.load({ devtool: 'source-map' }) // can use breakpoints with source-map
    );
  } else {
    console.error('no env provided to webpack');
  }
};
