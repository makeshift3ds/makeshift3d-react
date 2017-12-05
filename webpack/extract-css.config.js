const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.load = () => {
  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename: '[name].css'
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: plugin.extract({
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  config: {
                    path: 'postcss.config.js'
                  }
                }
              }
            ],
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [plugin]
  };
};
