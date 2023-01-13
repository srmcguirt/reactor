module.exports = {
  extends: [
    '@antfu',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: '../tsconfig.json',
  },
  rules: {
    // 'no-console': 'off',
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
  ],
}
