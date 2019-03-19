module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'no-prototype-builtins': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
  },
  'globals': {
    "fetch": false
  }
}
