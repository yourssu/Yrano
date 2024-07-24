## @yourssu/prettier-config

숭실대학교 동아리 유어슈 프론트엔드 팀을 위해 설계된 Prettier config입니다.

## Installation

```
npm install @yourssu/prettier-config

yarn add @yourssu/prettier-config

pnpm install @yourssu/prettier-config
```

## Rules

- `trailingComma: 'es5'` : 객체와 배열 같은 곳에서의 Trailing-comma를 허용한다. (타입스크립트 함수 파라미터에서는 비허용)
- `printWidth: 100` : 한 줄 당 코드 길이를 100으로 제한 한다.
- `semi: true` : 모든 문장의 끝에 세미콜론을 추가한다.
- `singleQuote: true` : `''`와 같은 작은 따옴표를 사용한다.
- `tabWidth: 2` : indent의 사이즈를 2로 설정한다.
- `arrowParens: 'always'` : 화살표 함수에서 부모를 포함한다.<br/>
  EX. `(x) => x` ⭕️, `x => x` ❌
- `endOfLine: 'auto'` : 기존 줄 끝 유지한다. (한 파일 내에서 혼합된 값은 첫 번째 줄 뒤에 사용된 것을 확인하여 정규화)

## Usage

**package.json**

```
"prettier": "@yourssu/prettier-config"
```