# useDebounce

`useDebounce` 는 지정된 시간 동안 실행을 지연시키는 디바운스 콜백을 생성하는 커스텀 React 훅입니다.
이 훅은 자주 호출되는 함수의 실행 빈도를 줄여 성능을 최적화하는 데 유용합니다.

## API

```ts
function useDebounce<F extends (...args: any[]) => any>(callback: F, wait: number);
```

### Parameters

- `callback` (function): 디바운스할 콜백 함수.
- `wait` (number): 디바운스 대기 시간(밀리초).

### Return value

- `debounced` (function): 디바운스된 버전의 콜백 함수.

## Example

```jsx
const debounce = useDebounce((newValue) => {
  console.log('Debounced value:', newValue);
}, 500);

const handleChange = (event) => {
  debounce(event.target.value);
};
```

## Notes

### usePreservedCallback

이 함수는 최신 콜백을 항상 참조하는 `callbackRef`를 생성합니다.
콜백이 업데이트될 때마다 `callbackRef`를 최신 콜백으로 업데이트합니다.
이를 통해 디바운스된 함수가 항상 최신 콜백을 사용하도록 보장합니다.

```jsx
const usePreservedCallback = function (callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args) => {
    return callbackRef.current(...args);
  }, []);
};
```
