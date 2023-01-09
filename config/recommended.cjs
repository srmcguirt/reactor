module.exports = {
  extends: [
    '@antfu',
  ],
  rules: {
    'no-console': 'off',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
  },
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      extends: [
        './jsdoc-config.cjs',
      ],
    },
    {
      files: [
        '**/*.md/*.*',
      ],
      rules: {
        'no-empty-pattern': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-syntax': 'off',
        'no-labels': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['README.md'],
      rules: {
        'no-empty-pattern': 'off',
      },
    },
  ],
}
