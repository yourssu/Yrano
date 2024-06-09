# base64Encode

`base64Encode` 함수는 주어진 문자열 데이터를 Base64 형식으로 인코딩합니다.

## Features

- 문자열 데이터 인코딩: 주어진 문자열 데이터를 Base64 형식으로 인코딩합니다.
- 인코딩된 문자열을 반환합니다.

## API

```ts
base64Encode(data: string): string
```

### Parameters

- `data` (string): 인코딩할 문자열 데이터입니다.

### Return value

- `encodedString` (string): 입력 데이터를 Base64 형식으로 인코딩한 결과입니다.

## Examples

```ts
const data = 'Hello, world!';
const encodedData = base64Encode(data);

console.log('Original Data:', data);
console.log('Base64 Encoded Data:', encodedData);
```