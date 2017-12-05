module.exports = ({ file }) => ({
  plugins: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%', 'iOS >= 10.0', 'not ie <= 11']
    }
  }
});
