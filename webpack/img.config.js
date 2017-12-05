exports.load = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 25000
            }
          }
        }
      ]
    }
  };
};
