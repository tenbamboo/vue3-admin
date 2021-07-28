module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  alias: {
    '@': resolve(__dirname, '../src/'),
  },
  rules: {
    // 自己写一些想配置的规则
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
  },
  // overrides: [
  //   {
  //     files: ['*.vue'],
  //     rules: {
  //       // 这里写覆盖vue文件的规则
  //     },
  //   },
  // ],
};
