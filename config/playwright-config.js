'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/*.pwtest.[jt]s'],
      plugins: ['playwright'],
      env: {
        'shared-node-browser': true
      },
      rules: {
        'playwright/max-nested-describe': 'error',
        'playwright/missing-playwright-await': 'error',
        'playwright/no-conditional-in-test': 'error',
        'playwright/no-element-handle': 'error',
        'playwright/no-eval': 'error',
        'playwright/no-focused-test': 'error',
        'playwright/no-force-option': 'error',
        'playwright/no-page-pause': 'error',
        'playwright/no-skipped-test': 'error',
        'playwright/no-useless-not': 'error',
        'playwright/no-wait-for-timeout': 'error',
        'playwright/prefer-lowercase-title': 'error',
        'playwright/prefer-to-have-length': 'error',
        'playwright/require-top-level-describe': 'error',
        'playwright/valid-expect': 'error'
      }
    }
  ]
};
