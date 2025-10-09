module.exports = {
  extends: '@soichiro_nitta/eslint-config/presets/react-typescript-prettier',
  plugins: ['sort-keys-fix', 'tailwindcss'],
  rules: {
    // オブジェクトのキーソートを無効化
    'sort-keys-fix/sort-keys-fix': 'off',
    'typescript-sort-keys/interface': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'off',

    // JSXプロップスとimportのソートは残す
    'react/jsx-sort-props': 'warn',
    'simple-import-sort/imports': 'warn',

    // Tailwindは有効
    'tailwindcss/classnames-order': 'warn',

    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
  },
}
