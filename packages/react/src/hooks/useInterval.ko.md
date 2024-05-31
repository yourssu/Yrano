# useInterval

`useInterval` 커스텀 훅은 특정 간격마다 주어진 콜백 함수를 실행하기 위해 사용됩니다. 이 훅은 `useEffect`와 `useRef`를 활용하여 콜백 함수와 간격 타이머를 관리합니다.

## 매개변수

- `callback`: 실행될 콜백 함수입니다.
- `interval`: 콜백 함수가 실행될 간격(밀리초)입니다.

## Example

```jsx
const MyComponent = () => {
  useInterval(() => {
    console.log('This will run every second');
  }, 1000);

  return <div>Check the console</div>;
};
```
