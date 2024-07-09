module.exports = {
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    jest: true,
    browser: true,
  },
  plugins: ['import', 'prettier', 'eslint-comments'],
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
