# hexToUtf8

The `hexToUtf8` function converts a hexadecimal string to a UTF-8 string.

## Features

- Converts the given hexadecimal string data to a UTF-8 string.
- Returns the conversion result as a UTF-8 string.

## API

```ts
hexToUtf8(hex
:
string
):
string;
```

### Parameters

- `hex` (string): The hexadecimal string data to be converted.

### Return value

- `utf8` (string): The UTF-8 string obtained from converting the input hexadecimal string.

## Examples

```ts
const hexString = '74657374';
const utf8String = hexToUtf8(hexString);
console.log('UTF-8 String:', utf8String); 
```
