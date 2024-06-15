## @yourssu/eslint-config

Typescript ESLint ruleset designed for the Yourssu Web-Frontend Team.

## Installation

```
npm install @yourssu/eslint-config

yarn add @yourssu/eslint-config

pnpm install @yourssu/eslint-config
```

## Rules

- This package is based on [rushstack-eslint-config](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-config).

### Basic rules

- `'prettier/prettier': ['error', { endOfLine: 'auto' }]` : <br/>set the endOfLine rule to 'auto'.
- `'@typescript-eslint/explicit-function-return-type': 'off'` : <br/>check if return type is written. (To avoid the use of React.FC while using Typescript, set as 'off')
- `'@typescript-eslint/no-explicit-any': 'warn'` : <br/>reports on explicit uses of the any keyword. (To allow using any in special cases)
- `'no-relative-import-paths/no-relative-import-paths': [
'warn',
{ allowSameFolder: true, rootDir: 'src', prefix: '@' },
]` : <br/>check if it is written with alias.

### React rules

- `'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]` : <br/>check if it export React Components only.
- `'jsx-a11y/alt-text': [
'warn',
{
elements: ['img'],
},
],`<br/> check if img element has meaningful alternative attribute.
- `'jsx-a11y/aria-props': 'warn'` : <br/>use valid aria-\_ props only.
- `'jsx-a11y/aria-proptypes': 'warn'` : <br/>use valid aria-\_ propstypes only.
- `'jsx-a11y/aria-unsupported-elements': 'warn'` : <br/>use DOM supported role, ARAI only.
- `'jsx-a11y/role-has-required-aria-props': 'warn'` : <br/>check if required ARIA properties are missing.
- `'jsx-a11y/role-supports-aria-props': 'warn'` : <br/>use only role supports aira property.
- `'react/no-unknown-property': 'off'` : <br/>check if property undefined in DOM (exceptions such as emotion css exists, thus set as ''off')
- `'react/prop-types': 'off'` : <br/>check if defined props are missing (complex cases exists, thus set as 'off')
- `'import/order': [
  'error',
  {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    pathGroups: [
      {
        pattern: 'react',
        group: 'external',
        position: 'before',
      },
      {
        pattern: '@/**',
        group: 'internal',
        position: 'after',
      },
    ],
    pathGroupsExcludedImportTypes: ['react', 'react-dom'],
    'newlines-between': 'always',
    alphabetize: { order: 'asc' },
  },
]` <br/>set the import order

## Usage

### Without React

- `@yourssu/eslint-config` : activate the general lint rules related to Typescript project.

**.eslintrc.js**

```
require('@yourssu/eslint-config/patch');

module.exports = {
  '@yourssu/eslint-config', // require general ESLint config
  parserOptions: { tsconfigRootDir: __dirname }
};
```

### With React

- `@yourssu/eslint-config` : activate the general lint rules related to Typescript project.
- `@yourssu/eslint-config/mixins/react` : activate general lint rules related to React project.
  (React version is set as >=18.0)

**.eslintrc.js**

```
require('@yourssu/eslint-config/patch');

module.exports = {
  '@yourssu/eslint-config', // require general ESLint config
  '@yourssu/eslint-config/mixins/react', // require React ESLint config
  parserOptions: { tsconfigRootDir: __dirname }
};
```
