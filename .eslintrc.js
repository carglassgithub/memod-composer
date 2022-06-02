module.exports = {
  env: {
    node: true
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-unexpected-multiline': 0,
    'vue/multi-word-component-names': 0
  }
}
