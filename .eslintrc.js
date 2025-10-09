module.exports = {
  extends: [
    '@soichiro_nitta/eslint-config/presets/react-typescript-prettier',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/classnames-order': 'warn',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['jsx', 'global'],
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'off',
    'typescript-sort-keys/interface': 'off',
    'react/jsx-sort-props': 'off',
  },
}
