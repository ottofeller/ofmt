module.exports = {
    'parser': '@typescript-eslint/parser',

    'globals': {
        'document': 'readonly',
        'navigator': 'readonly',
        'window': 'readonly',
    },

    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module',

        'ecmaFeatures': {
            'jsx': true,
        },
    },

    'plugins': [
        '@typescript-eslint',
    ],

    'rules': {
        'arrow-parens': [2, 'as-needed'],

        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'always-multiline',
        }],

        'consistent-return': 0,
        'curly': [2, 'multi'],
        'eol-last': [1],

        'indent': [2, 2, {
            'ArrayExpression': 1,
            'CallExpression': {'arguments': 1},
            'FunctionExpression': {'parameters': 1},
            'MemberExpression': 1,
            'ObjectExpression': 1,
            'VariableDeclarator': 0,
        }],

        'sort-imports': [
            'error',

            {
                'ignoreCase': true,
                'ignoreMemberSort': false,
                'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
            },
        ],

        'key-spacing': ['error', {'afterColon': true, 'align': 'colon'}],
        'lines-around-comment': [2, {'allowBlockStart': true, 'beforeBlockComment': true, 'beforeLineComment': true}],
        'max-len': [2, {'code': 120, 'ignoreUrls': true, 'ignoreComments': true, 'tabWidth': 2}],
        'no-debugger': 1,
        'no-extra-semi': 1,
        'no-mixed-spaces-and-tabs': [1],

        // Allow for spaced alignemnt of "=" and ":"
        'no-multi-spaces': [2, {'exceptions': {'Property': true, 'AssignmentExpression': true}}],

        'no-spaced-func': [1],
        'no-extra-parens': 'error',

        'no-unused-expressions': [1],
        'no-shadow': [2],
        'no-unused-vars': [1],
        '@typescript-eslint/no-unused-vars': [2, {'argsIgnorePattern': '^_'}],
        'object-curly-spacing': [1, 'never'],
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': [2, 'always'],
        'padded-blocks': [2, 'never'],

        'padding-line-between-statements': [
            'error',

            {
                'blankLine': 'always',
                'prev': '*',

                'next': [
                    'if', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var',
                ],
            },

            {
                'blankLine': 'always',

                'prev': [
                    'if', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var',
                ],

                'next': '*',
            },
        ],

        'semi': [2, 'never'],

        'space-before-function-paren': [1, {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always',
        }],

        'sort-keys': ['error', 'asc', {'caseSensitive': false}],

        'keyword-spacing': [2, {
            'after': false,
            'before': false,

            'overrides': {
                'as': {'after': true, 'before': true},
                'catch': {'after': false, 'before': true},
                'const': {'after': true, 'before': false},
                'default': {'after': true, 'before': true},
                'export': {'after': true, 'before': false},
                'finally': {'after': true, 'before': true},
                'from': {'after': true, 'before': true},
                'import': {'after': true, 'before': false},
                'let': {'after': true, 'before': false},
                'return': {'after': true, 'before': false},
                'try': {'after': true, 'before': false},
                'var': {'after': true, 'before': false},
            },
        }],

        'strict': [1, 'never'],
        'quotes': [1, 'single'],
        'eqeqeq': 2,

        '@typescript-eslint/member-delimiter-style': [1, {
            'multiline': {
                'delimiter': 'none',
                'requireLast': true,
            },
            'singleline': {
                'delimiter': 'comma',
                'requireLast': false,
            },
        }],
        '@typescript-eslint/no-explicit-any': 0,
    },
}
