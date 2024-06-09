# base64Encode

The `base64Encode` function encodes a given string into Base64 format.

## Features

- String Data Encoding: Encodes the given string data into Base64 format.
- Returns the encoded string.

## API

```ts
base64Encode(data: string): string
```

### Parameters

- `data` (string): The string data to be encoded.

### Return value

- `encodedString` (string): The result of encoding the input data into Base64 format.

## Examples

```ts
const data = 'Hello, world!';
const encodedData = base64Encode(data);

console.log('Original Data:', data);
console.log('Base64 Encoded Data:', encodedData);
```