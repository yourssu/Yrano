# useDebounce

The `useDebounce` hook creates a debounced version of a callback function that delays its execution until after a specified wait time has elapsed since the last time it was invoked.
This is useful for optimizing the performance of frequently called functions.

## API

```ts
function useDebounce<F extends (...args: any[]) => any>(callback: F, wait: number);
```

### Parameters

- `callback` (function): The callback function to be debounced.
- `wait` (number): The debounce delay time in milliseconds.

### Return value

- `debounced` (function): The debounced version of the callback function.

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

This function creates a `callbackRef` that always references the latest callback.
It updates the `callbackRef` to the latest callback whenever the callback changes, ensuring the debounced function always uses the latest callback.

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
