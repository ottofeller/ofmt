module.exports = {
  env    : {browser: true, jest: true, node: false},
  plugins: ['tailwindcss'],

  rules: {
    'tailwindcss/classnames-order'                  : ['error'],
    'tailwindcss/enforces-negative-arbitrary-values': ['error'],
    'tailwindcss/enforces-shorthand'                : ['error'],
    'tailwindcss/migration-from-tailwind-2'         : ['error'],
    'tailwindcss/no-arbitrary-value'                : ['off'],
    'tailwindcss/no-contradicting-classname'        : ['error'],
    'tailwindcss/no-custom-classname'               : ['error', {whitelist: ['span-full', 'scrollbar-hidden']}],
  },

  settings: {tailwindcss: {callees: ['cn']}},
}
