# hasNumberAndEnglishWithSymbols

이 함수는 입력된 문자열이 다음 기준을 충족하는지 확인합니다:
- 최소 하나의 영어 문자(대문자 및 소문자 모두 허용)를 포함해야 합니다.
- 최소 하나의 숫자를 포함해야 합니다.
- 지정된 범위 내의 허용된 특수 문자로만 구성되어야 합니다.

허용되는 특수 문자는 다음과 같습니다:
- ```! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ \ ` { | } ~ ₩```

## 매개변수

- `value`: 검사할 문자열입니다.

## 반환값

이 함수는 문자열이 위의 기준을 충족하면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

## Example
```typescript
console.log(hasNumberAndEnglishWithSymbols('abc123!@#')); // true
console.log(hasNumberAndEnglishWithSymbols('123!@#')); // false
console.log(hasNumberAndEnglishWithSymbols('abc!@#')); // false
console.log(hasNumberAndEnglishWithSymbols('abc123¡@#')); // false
