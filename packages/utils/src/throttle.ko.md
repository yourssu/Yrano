# throttle

`es-toolkit` 라이브러리에 기반합니다.

제공된 함수를 매 `throttleMs` 밀리초마다 최대 한 번만 호출하는 throttle된 함수를 생성합니다.
시간 안에 throttle된 함수를 다시 호출해도 원래 함수를 실행하지 않습니다.

## Signature

```typescript
function throttle<F extends (...args: any[]) => void>(func: F, throttleMs: number): F;
```

### Parameters

- `func` (`F`): throttle할 함수.
- `throttleMs`(`number`): 실행을 throttle할 밀리초.

### Returns

(`F`): 새로운 throttle된 함수.

## Examples

```typescript
const throttledFunction = throttle(() => {
  console.log('Function executed');
}, 1000);

// Will log 'Function executed' immediately
throttledFunction();

// Will not log anything as it is within the throttle time
throttledFunction();

// After 1 second
setTimeout(() => {
  throttledFunction(); // Will log 'Function executed'
}, 1000);
```
