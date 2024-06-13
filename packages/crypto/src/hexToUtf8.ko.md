# hexToUtf8

`hexToUtf8` 함수는 16진수 문자열을 UTF-8 문자열로 변환합니다.

## Features

- 주어진 16 문자열 데이터를 UTF-8 문자열로 변환합니다.
- 변환 결과를 UTF-8 문자열로 반환합니다.

## API

```ts
hexToUtf8(hex
:
string
):
string;
```

### Parameters

- `hex` (string): 암호화할 문자열 데이터입니다.

### Return value

- `utf8` (string): 입력된 16진수 문자열을 변환한 UTF-8 문자열입니다.

## Examples

```ts
const hexString = '74657374';
const utf8String = hexToUtf8(hexString);
console.log('UTF-8 String:', utf8String); 
```
