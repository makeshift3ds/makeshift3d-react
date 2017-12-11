module.exports = {
  extends: ['airbnb-base', 'react'],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    indent: ['error', 2],
    'comma-dangle': [0],
    'class-methods-use-this': [0],
    'import/no-extraneous-dependencies': [0]
  },
  settings: {
    'import/extensions': ['js', 'jsx']
  }
};
