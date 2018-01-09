/* eslint import/no-extraneous-dependencies: 0 */
const webpack = require('webpack');

exports.load = (env) => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: env === 'prod' ? '"https://54.90.74.8"' : '"http://localhost:3000"'
      }
    })
  ],
});
