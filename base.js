module.exports = {
    'extends': [
        'plugin:import/typescript'
    ],

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
        'fp',
        'ramda',
        'import',
        'unicorn'
    ],

    'rules': {
        'arrow-parens': ['error', 'as-needed'],
        'capitalized-comments': 'error',

        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'always-multiline',
        }],

        'curly'            : ['error', 'all'],
        'eol-last'         : 'warn',
        'fp/no-loops'      : 'error',

        'implicit-arrow-linebreak'         : ['error', 'beside'],
        'import/no-relative-parent-imports': 'error',

        'indent': ['error', 2, {
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
        'lines-around-comment': ['error', {'allowBlockStart': true, 'beforeBlockComment': true, 'beforeLineComment': true}],
        'line-comment-position': ['warn', {'position': 'above'}],
        'max-len': ['error', {'code': 120, 'ignoreUrls': true, 'ignoreComments': true, 'tabWidth': 2}],
        'max-lines': ['warn', 300],
        'max-params': ['warn', 2],
        'no-debugger': 'warn',
        'no-duplicate-imports': 'error',
        'no-extra-semi': 'warn',
        'no-mixed-spaces-and-tabs': 'warn',

        // Allow for spaced alignemnt of "=" and ":"
        'no-multi-spaces': ['error', {'exceptions': {'Property': true, 'AssignmentExpression': true}}],

        'no-multiple-empty-lines': ['error', {max: 1}],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-spaced-func': 'warn',
        'no-extra-parens': 'error',
        'no-unneeded-ternary': 'error',

        '@typescript-eslint/no-unused-vars': ['error', {'argsIgnorePattern': '^_'}],
        '@typescript-eslint/array-type': ['error', {default: 'generic', readOnly: 'generic'}],
        'no-unused-expressions': 'warn',
        'no-shadow': 'error',
        'no-unused-vars': 'warn',
        'object-curly-spacing': ['warn', 'never'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'padded-blocks': ['error', 'never'],
        'no-alert': 'error',

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

        'semi': ['error', 'never'],

        'space-before-function-paren': ['warn', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always',
        }],

        'spaced-comment': ['error', 'always'],
        'sort-keys': ['error', 'asc', {'caseSensitive': false}],

        'keyword-spacing': ['error', {
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
                'of': {'after': true, 'before': true},
                'return': {'after': true, 'before': false},
                'try': {'after': true, 'before': false},
                'var': {'after': true, 'before': false},
            },
        }],

        'id-length': ['error', {'exceptions': ['_', 'R', 'x', 'y']}],
        'strict'   : ['warn', 'never'],
        'quotes'   : ['warn', 'single'],
        'eqeqeq'   : 'error',

        '@typescript-eslint/member-delimiter-style': ['warn', {
            'multiline': {
                'delimiter': 'none',
                'requireLast': true,
            },
            'singleline': {
                'delimiter': 'comma',
                'requireLast': false,
            },
        }],

        // Ramda
        'ramda/compose-simplification': 'error',
        'ramda/cond-simplification': 'error',
        'ramda/eq-by-simplification': 'error',
        'ramda/filter-simplification': 'error',
        'ramda/map-simplification': 'error',
        'ramda/merge-simplification': 'error',
        'ramda/no-redundant-and': 'error',
        'ramda/no-redundant-not': 'error',
        'ramda/no-redundant-or': 'error',
        'ramda/pipe-simplification': 'error',
        'ramda/reduce-simplification': 'error',
        'ramda/set-simplification': 'error',
        'ramda/when-simplification': 'error',

        'unicorn/prevent-abbreviations': [
            'error',

            {
                'replacements': {
                    'dir': false,
                    'dirs': false,
                    'params': false,
                    'props': false
                }
            }
        ],
    },

    'overrides': [
        {
            // Disable some rules for tests
            'files': ['**/__tests__/*'],

            'rules': {
                'import/no-relative-parent-imports': 'off'
            }
        }
    ],
}
