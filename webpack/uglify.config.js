const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

exports.load = () => {
  return {
    plugins: [
      new UglifyJsPlugin({
        parallel: 4,
        sourceMap: true
      })
    ]
  };
};
