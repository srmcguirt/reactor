'use strict';

module.exports = {
    plugins: ['jsdoc'],
    rules: {
        'jsdoc/check-access': 'error', // Recommended
        'jsdoc/check-alignment': 'error', // Recommended
        'jsdoc/check-examples': 'off', // Currently broken in eslint 8
        'jsdoc/check-indentation': [
            'error',
            // Exclude default, as well as tags covered by check-line-alignment
            {
                excludeTags: [
                    'example',
                    'param',
                    'property',
                    'returns',
                    'throws',
                    'typedef'
                ]
            }
        ],
        'jsdoc/check-line-alignment': [
            'error',
            'always',
            {
                tags: ['param', 'property', 'returns', 'throws', 'typedef']
            }
        ],
        'jsdoc/check-param-names': 'error', // Recommended
        'jsdoc/check-property-names': 'error', // Recommended
        'jsdoc/check-syntax': 'error',
        'jsdoc/check-tag-names': 'error', // Recommended
        'jsdoc/check-types': 'error', // Recommended
        'jsdoc/check-values': 'error', // Recommended
        'jsdoc/empty-tags': 'error', // Recommended
        'jsdoc/implements-on-classes': 'error', // Recommended
        'jsdoc/match-description': 'error',
        'jsdoc/multiline-blocks': 'error', // Recommended
        'jsdoc/newline-after-description': 'error', // Recommended
        'jsdoc/no-bad-blocks': 'error',
        'jsdoc/no-defaults': 'off',
        'jsdoc/no-missing-syntax': 'off',
        'jsdoc/no-multi-asterisks': 'error', // Recommended
        'jsdoc/no-restricted-syntax': 'off',
        'jsdoc/no-types': 'off',
        'jsdoc/no-undefined-types': 'error', // Recommended
        'jsdoc/require-asterisk-prefix': 'error',
        'jsdoc/require-description-complete-sentence': 'error',
        'jsdoc/require-description': 'error',
        'jsdoc/require-example': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
        'jsdoc/require-jsdoc': [
            'error',
            {
                publicOnly: true,
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    ClassExpression: true,
                    FunctionDeclaration: true,
                    FunctionExpression: true
                }
            }
        ], // Recommended
        'jsdoc/require-param-description': 'error', // Recommended
        'jsdoc/require-param-name': 'error', // Recommended
        'jsdoc/require-param-type': 'error', // Recommended
        'jsdoc/require-param': 'error', // Recommended
        'jsdoc/require-property': 'error', // Recommended
        'jsdoc/require-property-description': 'error', // Recommended
        'jsdoc/require-property-name': 'error', // Recommended
        'jsdoc/require-property-type': 'error', // Recommended
        'jsdoc/require-returns-check': 'error', // Recommended
        'jsdoc/require-returns-description': 'error', // Recommended
        'jsdoc/require-returns-type': 'error', // Recommended
        'jsdoc/require-returns': 'error', // Recommended
        'jsdoc/require-throws': 'error', // Recommended
        'jsdoc/require-yields': 'error', // Recommended
        'jsdoc/require-yields-check': 'error', // Recommended
        'jsdoc/sort-tags': 'error',
        'jsdoc/tag-lines': 'error', // Recommended
        'jsdoc/valid-types': 'error' // Recommended
    }
};
