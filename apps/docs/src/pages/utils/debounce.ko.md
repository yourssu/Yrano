# debounce

`es-toolkit` 라이브러리에 기반합니다.

제공된 함수를 호출하는 것을 지연시키는 debounce된 함수를 생성합니다.
debounce된 함수는 마지막으로 호출된 후, `debounceMs` 밀리초가 경과해야 호출됩니다.
debounce된 함수는 또한 대기 중인 실행을 취소하는 `cancel` 메서드를 가지고 있습니다.

## API

```typescript
function debounce<F extends (...args: any[]) => void>(
  func: F,
  debounceMs: number,
  options?: DebounceOptions
): F & { cancel: () => void };
```

### Parameters

- `func` (`F`): debounce된 함수를 만들 함수.
- `debounceMs`(`number`): debounce로 지연시킬 밀리초.
- `options` (`DebounceOptions`, optional): 옵션 객체.
  - `signal` (`AbortSignal`, optional): debounce된 함수를 취소하기 위한 선택적 `AbortSignal`.

### Return value

(`F & { cancel: () => void }`): `cancel` 메서드를 가지고 있는 debounce된 함수.

## Examples

### Basic Usage

```ts
const debouncedFunction = debounce(() => {
  console.log('Function executed');
}, 1000);

// Will log 'Function executed' after 1 second if not called again in that time
debouncedFunction();

// Will not log anything as the previous call is canceled
debouncedFunction.cancel();
```

### Using with an AbortSignal

```ts
const controller = new AbortController();
const signal = controller.signal;
const debouncedWithSignalFunction = debounce(
  () => {
    console.log('Function executed');
  },
  1000,
  { signal }
);

// Will log 'Function executed' after 1 second if not called again in that time
debouncedWithSignalFunction();

// Will cancel the debounced function call
controller.abort();
```
