## @yourssu/eslint-config

숭실대학교 동아리 유어슈 프론트엔드 팀을 위해 설계된 Typescript ESLint config입니다.

## Installation

```
npm install @yourssu/eslint-config

yarn add @yourssu/eslint-config

pnpm install @yourssu/eslint-config
```

## Rules

- 해당 패키지는 [rushstack-eslint-config](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-config)에 기반을 두고 있습니다.

### Basic rules

- `'prettier/prettier': ['error', { endOfLine: 'auto' }]` : <br/>개행 방식 auto로 설정
- `'@typescript-eslint/explicit-function-return-type': 'off'` : <br/>return type 명시했는지 체크 (TS 내에서 React.FC 사용 지양을 위해서 off)
- `'@typescript-eslint/no-explicit-any': 'warn'` : <br/>any의 명시적 사용에 대해서 보고 (any를 사용해야하는 특수한 경우를 위해서 warn으로 설정)
- `'no-relative-import-paths/no-relative-import-paths': [
'warn',
{ allowSameFolder: true, rootDir: 'src', prefix: '@' },
]` : <br/>절대 경로로 작성 되어 있는지 체크

### React rules

- `'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]` : <br/>리액트 컴포넌트만 export하고 있는지 체크
- `'jsx-a11y/alt-text': [
'warn',
{
elements: ['img'],
},
],`<br/> img 엘리먼트에 유의미한 대체 텍스트가 있는지 체크
- `'jsx-a11y/aria-props': 'warn'` : <br/>유효한 aria-\_ 속성만 사용
- `'jsx-a11y/aria-proptypes': 'warn'` : <br/>유효한 aria-\_ 상태/값만 사용
- `'jsx-a11y/aria-unsupported-elements': 'warn'` : <br/>DOM에서 지원되는 role, ARIA만 사용
- `'jsx-a11y/role-has-required-aria-props': 'warn'` : <br/>필수 ARIA 속성이 빠져있는지 체크
- `'jsx-a11y/role-supports-aria-props': 'warn'` : <br/>ARIA 속성은 지원되는 role에서만 사용
- `'react/no-unknown-property': 'off'` : <br/>DOM에 정의되지 않은 속성을 사용했는지 체크 (emotion css 속성 등 예외 케이스가 있으므로 기본은 off)
- `'react/prop-types': 'off'` : <br/>정의한 props 중에 빠진게 있는지 체크 (NextPage 등 일부 추상화 컴포넌트에서 복잡해지므로 기본은 off)
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
]` <br/>import 순서 지정 (내장 모듈 - 외장 모듈 - 절대 경로 - 상위 경로 - 동일 경로 - 현재 경로 -> react 상위, @/\*\* 하위)

## Usage

### Without React

- `@yourssu/eslint-config` : 이 컨피그는 일반적인 타입스크립트 프로젝트와 관련된 Lint 규칙을 활성화합니다.

**.eslintrc.js**

```
module.exports = {
  '@yourssu/eslint-config', // 공통 ESLint 컨피그 불러오기
  parserOptions: { tsconfigRootDir: __dirname }
};
```

### With React

- `@yourssu/eslint-config` : 이 컨피그는 일반적인 타입스크립트 프로젝트와 관련된 Lint 규칙을 활성화합니다.
- `@yourssu/eslint-config/mixins/react` : 이 컨피그는 React 프로젝트와 관련된 Lint 규칙을 활성화합니다. (해당 config에서는 React 버전을 18.0 이상으로 명시해두었습니다.)

**.eslintrc.js**

```
module.exports = {
  '@yourssu/eslint-config', // 공통 ESLint 컨피그 불러오기
  '@yourssu/eslint-config/mixins/react', // React용 ESLint 컨피그 불러오기
  parserOptions: { tsconfigRootDir: __dirname }
};
```
