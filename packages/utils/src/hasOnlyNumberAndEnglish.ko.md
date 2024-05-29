# hasOnlyNumberAndEnglish

주어진 문자열이 오직 숫자와 영어 알파벳(대소문자)으로만 구성되어 있는지 확인하는 함수입니다.

## 매개변수

- `value`: 검사할 문자열입니다.

## 반환값

문자열이 오직 숫자와 영어 알파벳으로만 구성되어 있으면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

## Example

```typescript
import { hasOnlyNumberAndEnglish } from './utils';

console.log(hasOnlyNumberAndEnglish('Hello123')); // true
console.log(hasOnlyNumberAndEnglish('123')); // true
console.log(hasOnlyNumberAndEnglish('Hello')); // true
console.log(hasOnlyNumberAndEnglish('Hello123!')); // false
console.log(hasOnlyNumberAndEnglish('@#$%')); // false
```
