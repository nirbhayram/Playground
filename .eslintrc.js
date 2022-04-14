// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/no-unused-vars': 0,
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-redeclare': 0,
    'testing-library/render-result-naming-convention': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
      },
    ],
  },
  ignorePatterns: [],
};
