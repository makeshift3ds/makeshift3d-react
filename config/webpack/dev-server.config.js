exports.load = () => ({
  devServer: {
    overlay: {
      errors: true,
      warnings: true
    },
    historyApiFallback: true
  }
});
