/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  env    : {browser: true, jest: true, node: true},

  parser       : '@typescript-eslint/parser',
  parserOptions: {ecmaFeatures: {jsx: true}, ecmaVersion: 2020, sourceType: 'module'},

  rules: {
    'padding-line-between-statements': [
      'error',
      {blankLine: 'any', prev: '*', next: '*'},
      {blankLine: 'always', prev: '*', next: 'multiline-block-like'},
      {blankLine: 'always', prev: 'multiline-block-like', next: '*'},
      {blankLine: 'always', prev: '*', next: 'multiline-const'},
      {blankLine: 'always', prev: 'multiline-const', next: '*'},
      {blankLine: 'always', prev: '*', next: 'multiline-expression'},
      {blankLine: 'always', prev: 'multiline-expression', next: '*'},
      {blankLine: 'always', prev: '*', next: 'multiline-let'},
      {blankLine: 'always', prev: 'multiline-let', next: '*'},
    ],
  },
}
