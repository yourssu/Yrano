# throttle

It is based on the `es-toolkit` library.

Creates a throttled function that only invokes the provided function at most once
per every `throttleMs` milliseconds. Subsequent calls to the throttled function
within the wait time will not trigger the execution of the original function.
The throttle function also has a `cancel` method.

## Signature

```typescript
function throttle<F extends (...args: any[]) => void>(
  func: F,
  throttleMs: number
): F & { cancel: () => void };
```

### Parameters

- `func` (`F`): The function to throttle.
- `throttleMs`(`number`): The number of milliseconds to throttle executions to.

### Returns

(`F & { cancel: () => void }`): A new throttled function with a `cancel` method.

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
