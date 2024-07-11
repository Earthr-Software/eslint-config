module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
  ],
  plugins: ['prettier', 'import', 'promise', 'node', 'jsdoc'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        tabWidth: 2,
      },
    ],
  },
};
