module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        parser: 'babel',
        trailingComma: 'none',
        arrowParens: 'avoid',
      },
    ],
  },
};
