'use strict';

const tabSpaces = 2;
const complexityThreshold = 20;
const maxLinesThreshold = 300;
const maxFunctionLinesThreshold = 30;
const nestedThreshold = 5;

module.exports = {
  env: {
    es2022: true,
    node: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'script'
  },
  reportUnusedDisableDirectives: true,
  rules: {
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'always'],
    'block-scoped-var': 1,
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup'],
    "camelcase": ["error", {
      "allow": ["^UNSAFE_"],
      "properties": "never",
      "ignoreGlobals": true
    }],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    'comma-spacing': ['error', { before: false, after: true }],
    complexity: ['error', complexityThreshold],
    'computed-property-spacing': ['error', 'never'],
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'eol-last': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    "indent": ["error", tabSpaces, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": { "parameters": 1, "body": 1 },
      "FunctionExpression": { "parameters": 1, "body": 1 },
      "CallExpression": { "arguments": 1 },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoreComments": false,
      "ignoredNodes": ["TemplateLiteral *", "JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
      "offsetTernaryExpressions": true
    }],
    'key-spacing': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'logical-assignment-operators': ['error', 'always'],
    'max-depth': ['error', { max: nestedThreshold }],
    'max-lines': ['error', maxLinesThreshold],
    'max-lines-per-function': [
      'error',
      {
        max: maxFunctionLinesThreshold,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', { max: nestedThreshold }],
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-console': 'off',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1] }],
    "no-mixed-operators": ["error", {
      "groups": [
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": true
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    // Disabled in favor of unicorn/no-nested-ternary
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-promise-executor-return': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-shadow': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-warning-comments': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'padded-blocks': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { array: true, object: true }],
    'prefer-object-spread': ['error'],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": false }],
    'require-await': 'error',
    'rest-spread-spacing': 'error',
    semi: ['error', 'never'],
    "semi-spacing": ["error", { "before": false, "after": true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
    strict: 'error',
    'template-curly-spacing': 'error',
    'wrap-iife': 'error',
    yoda: 'error'
  }
};
