/* eslint import/no-extraneous-dependencies: 0 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

exports.load = () => ({
  plugins: [
    new UglifyJsPlugin({
      parallel: 4,
      sourceMap: true,
    }),
  ],
});
