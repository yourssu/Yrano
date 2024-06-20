# useThrottle

useThrottle 훅은 함수를 일정 시간 간격으로 한 번만 호출되도록 하는 커스텀 React 훅입니다.
쓰로틀링을 통해 함수가 여러 번 트리거되더라도 지정된 시간 간격 내에서는 한 번만 호출되도록 보장합니다.

## API

```ts
function useThrottle<F extends (...args: any[]) => any>(callback: F, wait: number);
```

### Parameters

- `callback` (function): 쓰로틀링할 콜백 함수.
- `wait` (number): 콜백이 다시 호출되기 전에 대기할 밀리초 시간.

### Return value

- `throttled` (function): 쓰로틀링된 버전의 콜백 함수.

## Example

```jsx
const [value, setValue] = useState(0);

const handleIncrement = useThrottle(() => {
  setValue((prev) => prev + 1);
}, 1000);
```

## Notes

### usePreservedCallback

이 함수는 최신 콜백을 항상 참조하는 `callbackRef`를 생성합니다.
콜백이 업데이트될 때마다 `callbackRef`를 최신 콜백으로 업데이트합니다.
이를 통해 쓰로틀링된 함수가 항상 최신 콜백을 사용하도록 보장합니다.

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
