# isEmai
이메일 주소가 RFC 5322 표준을 따르는지 검사하고, 올바른 이메일 형식으로 반환해줍니다.

## 매개변수

- `email`: 검사할 이메일 주소입니다. 
  - 해당 값은 도메인 (eg. @domain.com)을 포함한 값일 수도 있고, 포함하지 않은 값일 수도 있습니다.
  - 도메인 값을 포함하지 않는 경우, 반드시 `domain` 매개변수를 작성해야 합니다.
- `domain`: 검사할 도메인 주소입니다. (optional)

## 반환값

표준을 따르는 이메일 주소 혹은 이메일 아이디와 도메인 주소를 입력했다면, 올바른 이메일 형식을 반환합니다. 그렇지 않다면, error를 발생시킵니다.

## Example

```typescript
console.log(isEmai('stella@yourssu.com')); // stella@yourssu.com
console.log(isEmai('stella', '@yourssu.com')); // stella@yourssu.com
console.log(isEmail('')) // 'given value is not valid'
console.log(isEmail('stella')) // 'given value is not valid'
console.log(isEmail('1234')) // 'given value is not valid'
console.log(isEmail('stella@')) // 'given value is not valid'
console.log(isEmail('stella@yourssu')) // 'given value is not valid'
console.log(isEmail('stella@yourssu.')) // 'given value is not valid'
console.log(isEmail('stella@yourssu.com123')) // 'given value is not valid'
console.log(isEmail('stella')) // 'given value is not valid'
console.log(isEmail('', '@naver.com')) // 'given value is not valid'
console.log(isEmail('@naver.com')) // 'given value is not valid'
console.log(isEmail('stella', '@yourssu.com123')) // 'given value is not valid'
console.log(isEmail('stella', '@yourssu')) // 'given value is not valid'
```
