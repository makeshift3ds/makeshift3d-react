module.exports = {
  extends: ['airbnb-base', 'react'],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline']
  },
  settings: {
    'import/extensions': ['js', 'jsx']
  }
};
