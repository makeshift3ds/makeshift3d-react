const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.load = ({ root, path }) => {
  return {
    plugins: [new CleanWebpackPlugin([path], root)]
  };
};
