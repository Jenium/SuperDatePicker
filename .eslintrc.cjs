module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    semi: 0,
    '@typescript-eslint/semi': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^@?\\w'], ['^~/?\\w'], ['^\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
