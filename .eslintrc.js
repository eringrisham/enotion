module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'sort-imports':
    [
      'error',
      {
        'ignoreCase': true,
        'ignoreDeclarationSort': true
      }
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error']
  },
};
