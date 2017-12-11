/* eslint no-console: 0 */
/* Components */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const merge = require('webpack-merge');

/* Configurations */
const cssConfig = require('./config/webpack/css.config');
const devServerConfig = require('./config/webpack/dev-server.config');
const extractCssConfig = require('./config/webpack/extract-css.config');
const imgConfig = require('./config/webpack/img.config');
const sourceMapConfig = require('./config/webpack/source-maps.config');
const cleanConfig = require('./config/webpack/clean.config');
const uglifyConfig = require('./config/webpack/uglify.config');
const jsConfig = require('./config/webpack/js.config');

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
        title: 'React App',
        template: './src/index.html'
      }),
      new webpack.NamedModulesPlugin()
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  },
  imgConfig.load(),
  jsConfig.load()
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
};
