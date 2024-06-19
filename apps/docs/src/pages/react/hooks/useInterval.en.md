# useInterval

`useInterval` custom hook is used to execute a given callback function at a specified interval.
This hook utilizes `useEffect` and `useRef` to manage the callback function and interval timer.

## API

```ts
useInterval(callback: () => void, interval: number)
```

#### Parameters

- `callback` (function): The callback function to be executed.
- `interval` (number): The interval (in milliseconds) at which the callback function will be executed.

## Example

```jsx
const MyComponent = () => {
  useInterval(() => {
    console.log('This will run every second');
  }, 1000);

  return <div>Check the console</div>;
};
```

## Notes

This hook internally uses two `useEffect` hooks:

1. The first `useEffect` keeps the callback function up to date.
2. The second `useEffect` sets up a timer to execute the callback function at the given interval.

If the `interval` changes or is set to `null`, the timer will be updated or cleared accordingly.
