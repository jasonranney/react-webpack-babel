module.exports = {
  parser: 'babel-eslint',
  extends: 'react',
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': ['error', 'always'],
    'no-console': 'off',
    "space-before-function-paren": ["error", "never"]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
