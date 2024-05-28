# hasOnlyEnglishAndHangul

주어진 문자열이 오직 영어 알파벳(대문자 및 소문자), 한글(자모 및 음절), 숫자로만 구성되어 있는지 확인하는 함수입니다.

## 매개변수

- `value`: 검사할 문자열입니다.

## 반환값

문자열이 오직 영어 알파벳, 한글, 숫자로만 구성되어 있으면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

## Example

```typescript
import { hasOnlyEnglishAndHangul } from './utils';

console.log(hasOnlyEnglishAndHangul('Hello123')); // true
console.log(hasOnlyEnglishAndHangul('안녕하세요')); // true
console.log(hasOnlyEnglishAndHangul('123')); // true
console.log(hasOnlyEnglishAndHangul('Hello123안녕하세요')); // true
console.log(hasOnlyEnglishAndHangul('@#$%')); // false
