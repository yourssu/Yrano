# formatYYYYMMDDHHMM

주어진 날짜 관련 문자열이 올바른 형식인지 검사하고 `YYYY.MM.DD.HH.MM`의 형태로 반환합니다.
> [date-fns](https://github.com/date-fns/date-fns)의 isValid 함수를 활용하여서 검사합니다.

## 매개변수

- `basedTime`: 검사할 문자열입니다.

## 반환값

- 문자열이 올바른 형식이라면, `YYYY.MM.DD.HH.MM` 형태의 문자열을 반환합니다.
- 그렇지 않다면, `new Error('Invalid date format')`를 반환합니다.


## Example

```typescript
console.log(formatYYYYMMDDHHMM('2024-06-14T03:12:32'); // 2024.06.14 03:12

console.log(formatYYYYMMDDHHMM('2024-13-14T00:00:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-32T00:00:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-14T25:00:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-14T00:70:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-14T:00:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-14T00::00')); // Invalid date format
```
