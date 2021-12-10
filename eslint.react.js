module.exports = {
  env    : {browser: true, jest: true, node: false},
  extends: './eslint.base.js',
  plugins: ['@ottofeller/ottofeller', 'react-hooks', 'react'],

  rules: {
    '@ottofeller/ottofeller/jsx-newline-block': 'error',
    'react-hooks/exhaustive-deps'             : 'warn',
    'react-hooks/rules-of-hooks'              : 'error',
    'react/destructuring-assignment'          : ['warn', 'never', {ignoreClassFields: true}],
    'react/jsx-curly-spacing'                 : ['warn', 'never'],
    'react/jsx-fragments'                     : ['error', 'element'],
    'react/jsx-key'                           : ['error', {checkFragmentShorthand: true}],
    'react/jsx-no-bind'                       : 'error',
    'react/jsx-no-useless-fragment'           : 'error',
    'react/jsx-uses-vars'                     : 'warn',
    'react/no-unused-prop-types'              : 'error',
    'react/prefer-stateless-function'         : 'error',
    'react/self-closing-comp'                 : 'error',
  },

  settings: {react: {pragma: 'React', version: '16.10'}},
}
