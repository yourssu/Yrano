# formatYYYYMMDDHHMM

check if date-related string is valid and returns into the form of `YYYY.MM.DD.HH.MM`.
> check the validation using [date-fns](https://github.com/date-fns/date-fns)'s `isValid` function.

## 매개변수

- `basedTime`: date-related string to be checked.

## 반환값

- if the string is valid, returns the string in the form of `YYYY.MM.DD.HH.MM`
- if not, returns `new Error('Invalid date format')`


## Example

```typescript
console.log(formatYYYYMMDDHHMM('2024-06-14T03:12:32')); // 2024.06.14 03:12

console.log(formatYYYYMMDDHHMM('2024-13-14T00:00:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-32T00:00:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-14T25:00:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-14T00:70:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-14T:00:00')); // Invalid date format
console.log(formatYYYYMMDDHHMM('2024-06-14T00::00')); // Invalid date format
```
