module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'max-len': ['error', 90],
    quotes: [2, 'single', { avoidEscape: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    curly: 'error',
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'commitlint.config.js', 'jest.config.js'],
};
