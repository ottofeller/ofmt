/* eslint-disable max-len -- disabling file length limitation for compactness. */
module.exports = {
  extends: './eslint.base.js',
  plugins: ['graphql'],

  rules: {
    'graphql/named-operations': ['error', {env: 'apollo', schemaJsonFilepath: './schema.json'}],
    'graphql/required-fields' : ['error', {env: 'apollo', requiredFields: ['id', '_id', 'uuid'], schemaJsonFilepath: './schema.json'}],
    'graphql/template-strings': ['error', {env: 'apollo', schemaJsonFilepath: './schema.json'}],
  },
}
