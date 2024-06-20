# useThrottle

The `useThrottle` hook creates a throttled version of a callback function.
Throttling ensures that the function is called at most once in a specified time interval, even if it is triggered multiple times.

## API

```ts
function useThrottle<F extends (...args: any[]) => any>(callback: F, wait: number);
```

### Parameters

- `callback` (function): The callback function to be throttled.
- `wait` (number): The number of milliseconds to wait before allowing the callback to be called again.

### Return value

- `throttled` (function): The throttled version of the callback function.

## Example

```jsx
const [value, setValue] = useState(0);

const handleIncrement = useThrottle(() => {
  setValue((prev) => prev + 1);
}, 1000);
```

## Notes

### usePreservedCallback

This function creates a `callbackRef` that always references the latest callback.
It updates the `callbackRef` to the latest callback whenever the callback changes, ensuring the throttled function always uses the latest callback.

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
