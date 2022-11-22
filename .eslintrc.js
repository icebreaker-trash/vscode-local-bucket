/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@icebreakers/eslint-config-ts'],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-namespace': 0,
    'no-inner-declarations': 0
  },
  ignorePatterns: ['out', 'dist', '**/*.d.ts']
}
