/* eslint import/no-extraneous-dependencies: 0 */
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.load = ({ root, path }) => ({
  plugins: [new CleanWebpackPlugin([path], root)],
});
