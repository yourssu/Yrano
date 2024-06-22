# isEmai

Check if the email address conforms to the RFC 5322 standard and return into the correct email format.

## 매개변수

- `email`: email address to be checked.
  - it can be the value that includes the domain(eg. @domain.com) or not.
  - if domain is not included, must include the `domain` parameter.
- `domain`: domain address to be checked. (optional)

## 반환값

- If email address or set of email id and domain that conforms the standard is entered, returns the 
correct email format. 
- If not, returns the error.


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
