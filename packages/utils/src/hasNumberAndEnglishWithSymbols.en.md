# hasNumberOrEnglishOrHangulOrSpace

This function checks if the given string consists only of English uppercase and lowercase letters, Hangul, digits, and
spaces.

## Parameters

- `value`: The string to be checked.

## Return Value

The function returns `true` if the string consists only of English alphabets, Hangul, digits, and spaces, and `false`
otherwise.

## Example

```typescript
console.log(hasNumberOrEnglishOrHangulOrSpace('Hello123')); // true
console.log(hasNumberOrEnglishOrHangulOrSpace('안녕하세요')); // true
console.log(hasNumberOrEnglishOrHangulOrSpace('123')); // true
console.log(hasNumberOrEnglishOrHangulOrSpace('Hello123안녕하세요')); // true
console.log(hasNumberOrEnglishOrHangulOrSpace('@#$%')); // false
console.log(hasNumberOrEnglishOrHangulOrSpace('')); // false
console.log(hasNumberOrEnglishOrHangulOrSpace(' ')); // true
