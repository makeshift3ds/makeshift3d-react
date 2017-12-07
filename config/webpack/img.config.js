exports.load = () => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
        },
      },
    ],
  },
});
