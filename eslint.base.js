/* eslint-disable max-len -- disabling file length limitation for compactness. */
module.exports = {
  extends: ['plugin:import/typescript'],
  globals: {document: 'readonly', navigator: 'readonly', window: 'readonly'},

  overrides: [
    {

      // Disable some rules for tests
      files: ['**/__tests__/*'],

      rules: {
        'import/no-relative-parent-imports': 'off',
      },
    },
  ],

  parser       : '@typescript-eslint/parser',
  parserOptions: {ecmaFeatures: {jsx: true}, ecmaVersion: 2020, sourceType: 'module'},
  plugins      : ['@typescript-eslint', 'eslint-comments', 'fp', 'import', 'ramda', 'unicorn'],

  rules: {
    '@typescript-eslint/array-type'            : ['error', {default: 'generic', readOnly: 'generic'}],
    '@typescript-eslint/member-delimiter-style': ['warn', {multiline: {delimiter: 'none', requireLast: true}, singleline: {delimiter: 'comma', requireLast: false}}],
    '@typescript-eslint/no-shadow'             : ['error'],
    '@typescript-eslint/no-unused-vars'        : ['error', {argsIgnorePattern: '^_'}],
    'arrow-parens'                             : ['error', 'as-needed'],
    'capitalized-comments'                     : ['error'],
    'comma-dangle'                             : ['error', {arrays: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline', imports: 'always-multiline', objects: 'always-multiline'}],
    'curly'                                    : ['error', 'all'],
    'eol-last'                                 : ['warn'],
    'eqeqeq'                                   : ['error'],
    'eslint-comments/require-description'      : ['error'],
    'fp/no-loops'                              : ['error'],
    'id-length'                                : ['error', {exceptions: ['_', 'R', 'x', 'y']}],
    'implicit-arrow-linebreak'                 : ['error', 'beside'],
    'import/no-relative-parent-imports'        : ['error'],
    'indent'                                   : ['error', 2, {ArrayExpression: 1, CallExpression: {arguments: 1}, FunctionExpression: {parameters: 1}, MemberExpression: 1, ObjectExpression: 1, VariableDeclarator: 0}],
    'key-spacing'                              : ['error', {afterColon: true, align: 'colon'}],
    'keyword-spacing'                          : ['error', {after: false, before: false, overrides: {as: {after: true, before: true}, catch: {after: false, before: true}, const: {after: true, before: false}, default: {after: true, before: true}, export: {after: true, before: false}, finally: {after: true, before: true}, from: {after: true, before: true}, import: {after: true, before: false}, let: {after: true, before: false}, of: {after: true, before: true}, return: {after: true, before: false}, try: {after: true, before: false}, var: {after: true, before: false}}}],
    'line-comment-position'                    : ['warn', {position: 'above'}],
    'lines-around-comment'                     : ['error', {allowBlockStart: true, beforeBlockComment: true, beforeLineComment: true}],
    'max-len'                                  : ['error', {code: 120, ignoreComments: true, ignoreUrls: true, tabWidth: 2}],
    'max-lines'                                : ['warn', 300],
    'max-params'                               : ['warn', 2],
    'no-alert'                                 : ['error'],
    'no-debugger'                              : ['warn'],
    'no-duplicate-imports'                     : ['error'],
    'no-extra-parens'                          : ['error'],
    'no-extra-semi'                            : ['warn'],
    'no-mixed-spaces-and-tabs'                 : ['warn'],
    'no-multi-spaces'                          : ['error', {exceptions: {AssignmentExpression: true, Property: true}}],
    'no-multiple-empty-lines'                  : ['error', {max: 1}],
    'no-negated-condition'                     : ['error'],
    'no-nested-ternary'                        : ['error'],
    'no-shadow'                                : ['off'],
    'no-spaced-func'                           : ['warn'],
    'no-trailing-spaces'                       : ['error'],
    'no-unneeded-ternary'                      : ['error'],
    'no-unused-expressions'                    : ['warn'],
    'no-unused-vars'                           : ['warn'],
    'object-curly-spacing'                     : ['warn', 'never'],
    'one-var'                                  : ['error', 'never'],
    'one-var-declaration-per-line'             : ['error', 'always'],
    'padded-blocks'                            : ['error', 'never'],
    'padding-line-between-statements'          : ['error', {blankLine: 'always', next: ['if', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var'], prev: '*'}, {blankLine: 'always', next: '*', prev: ['if', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var']}],
    'quotes'                                   : ['warn', 'single'],
    'ramda/compose-simplification'             : ['error'],
    'ramda/cond-simplification'                : ['error'],
    'ramda/eq-by-simplification'               : ['error'],
    'ramda/filter-simplification'              : ['error'],
    'ramda/map-simplification'                 : ['error'],
    'ramda/merge-simplification'               : ['error'],
    'ramda/no-redundant-and'                   : ['error'],
    'ramda/no-redundant-not'                   : ['error'],
    'ramda/no-redundant-or'                    : ['error'],
    'ramda/pipe-simplification'                : ['error'],
    'ramda/reduce-simplification'              : ['error'],
    'ramda/set-simplification'                 : ['error'],
    'ramda/when-simplification'                : ['error'],
    'semi'                                     : ['error', 'never'],
    'sort-imports'                             : ['error', {ignoreCase: true, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']}],
    'sort-keys'                                : ['error', 'asc', {caseSensitive: false}],
    'space-before-function-paren'              : ['warn', {anonymous: 'always', asyncArrow: 'always', named: 'never'}],
    'spaced-comment'                           : ['error', 'always'],
    'strict'                                   : ['warn', 'never'],
    'unicorn/prevent-abbreviations'            : ['error', {replacements: {dir: false, dirs: false, params: false, props: false}}],
  },
}
/* eslint-enable max-len */
