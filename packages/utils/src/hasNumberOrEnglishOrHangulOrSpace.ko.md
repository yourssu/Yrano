# hasNumberOrEnglishOrHangulOrSpace

주어진 문자열이 오직 영어 대소문자, 한글, 숫자, 공백으로만 구성되어 있는지 확인하는 함수입니다.

## 매개변수

- `value`: 검사할 문자열입니다.

## 반환값

문자열이 오직 영어 알파벳, 한글, 숫자, 공백으로만 구성되어 있으면 `true`를 반환하고,
그렇지 않으면 `false`를 반환합니다.

## Example

```typescript
console.log(hasNumberOrEnglishOrHangulOrSpace('Hello123')); // true
console.log(hasNumberOrEnglishOrHangulOrSpace('안녕하세요')); // true
console.log(hasNumberOrEnglishOrHangulOrSpace('123')); // true
console.log(hasNumberOrEnglishOrHangulOrSpace('Hello123안녕하세요')); // true
console.log(hasNumberOrEnglishOrHangulOrSpace('@#$%')); // false
```