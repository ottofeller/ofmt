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
        '@ottofeller/ottofeller',
    ],

    'rules': {
        '@ottofeller/ottofeller/jsx-newline-block': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/destructuring-assignment': ['warn', 'never', {'ignoreClassFields': true}],
        'react/jsx-curly-spacing': ['warn', 'never'],
        'react/jsx-key': ['error', {'checkFragmentShorthand': true}],
        'react/jsx-uses-vars': 'warn',
        'react/prefer-stateless-function': 'error',
        'react/jsx-no-bind': 'error',
        'react/self-closing-comp': 'error',
        'react/jsx-handler-names': 'off',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-fragments': ['error', 'element'],
    },

    'settings': {
        'react': {
            'pragma': 'React',
            'version': '16.10',
        },
    },
}
