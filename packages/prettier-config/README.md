## @yourssu/prettier-config

Prettier ruleset designed for the Yourssu Web-Frontend Team.

## Installation

```
npm install @yourssu/prettier-config

yarn add @yourssu/prettier-config

pnpm install @yourssu/prettier-config
```

## Rules

- `trailingComma: 'es5'` : trailing commas where valid in ES5 (objects, arrays, etc.). Trailing commas in type parameters in TypeScript and Flow.
- `printWidth: 100` : specify the line length that the printer will wrap on as 100.
- `semi: true` : Add a semicolon at the end of every statement.
- `singleQuote: true` : use single quotes
- `tabWidth: 2` : specify the number of spaces per indentation-level as 2.
- `arrowParens: 'always'` : Always include parens.<br/>
  EX. `(x) => x` ⭕️, `x => x` ❌
- `endOfLine: 'auto'` : maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)

## Usage

**package.json**

```
"prettier": "@yourssu/prettier-config"
```
