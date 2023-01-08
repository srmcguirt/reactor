'use strict';

module.exports = {
    overrides: [
        {
            files: [
                '**/__tests__/**/*.[jt]s?(x)',
                '**/?(*.)+(spec|test).[jt]s?(x)'
            ],
            plugins: ['vitest']
        }
    ]
};
