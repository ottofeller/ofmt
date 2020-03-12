module.exports = {
    'extends': './base.js',

    'env': {
        'browser': true,
        'jest': true,
        'node': false,
    },

    'plugins': [
        'react',
        'react-hooks',
    ],

    'rules': {
        'no-process-env': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/destructuring-assignment': [1, 'never', {'ignoreClassFields': true}],
        'react/jsx-curly-spacing': [1, 'never'],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 1,
        'react/prefer-stateless-function': 2,
        'react/jsx-no-bind': 2,
        'react/self-closing-comp': 2,
        'react/jsx-handler-names': 0,
    },

    'settings': {
        'react': {
            'pragma': 'React',
            'version': '16.10',
        },
    },
}
