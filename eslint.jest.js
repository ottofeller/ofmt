module.exports = {
  env    : {'jest': true},
  extends: ['./eslint.base.js'],
  globals: {browser: true, context: true, jestPuppeteer: true, page: true},
}
