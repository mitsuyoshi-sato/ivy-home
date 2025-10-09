module.exports = {
  extends: '@soichiro_nitta/eslint-config/presets/react-typescript-prettier',
  plugins: ['sort-keys-fix'],
  rules: {
    'sort-keys-fix/sort-keys-fix': 'warn',
    'typescript-sort-keys/interface': 'warn',
    'react/jsx-sort-props': 'warn',
  },
}
