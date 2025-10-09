module.exports = {
  extends: [
    '@soichiro_nitta/eslint-config/presets/react-typescript-prettier',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/classnames-order': 'warn',
  },
}
