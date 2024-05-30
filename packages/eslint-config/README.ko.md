## @yourssu/eslint-config

숭실대학교 동아리 유어슈 프론트엔드 팀을 위해 설계된 Typescript ESLint config입니다.

## Installation

```
npm install @yourssu/eslint-config

yarn add @yourssu/eslint-config

pnpm install @yourssu/eslint-config
```

## Rules

(추후 수정 예정)

## Usage

**.eslintrc.js**

- `@yourssu/eslint-config` : 이 컨피그는 일반적인 타입스크립트 프로젝트와 관련된 Lint 규칙을 활성화합니다.

- `@yourssu/eslint-config` : 이 컨피그는 React 프로젝트와 관련된 Lint 규칙을 활성화합니다. (해당 config에서는 React 버전을 18.0 이상으로 명시해두었습니다.)

```
require('@yourssu/eslint-config/patch');

module.exports = {
  '@yourssu/eslint-config', // 공통 ESLint 컨피그 불러오기
  '@yourssu/eslint-config/mixins/react', // React용 ESLint 컨피그 불러오기
  parserOptions: { tsconfigRootDir: __dirname }
};
```
