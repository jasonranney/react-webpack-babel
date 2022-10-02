module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'react-app'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-cond-assign': ['error', 'always'],
    'no-console': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
