/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vuejs-accessibility/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['*.cjs'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        components: ['VLabel'],
        controlComponents: ['VInput'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
};
