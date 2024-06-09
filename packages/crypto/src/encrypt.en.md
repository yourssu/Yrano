# encrypt

The `encrypt` function encrypts a given string using the SHA-256 algorithm.

## Features

- String Data Encryption: Hashes the given string data using the SHA-256 algorithm.
- Returns the hash result as a hexadecimal string.

## API

```ts
encrypt(data: string): string;
```

### Parameters

- `data` (string): The string data to be encrypted.

### Return value

- `hashString` (string): The result of hashing the input data with SHA-256, converted to a hexadecimal string.

## Examples

```ts
const data = 'Hello, world!';
const hashedData = encrypt(data);

console.log('Original Data:', data);
console.log('Hashed Data:', hashedData);
```