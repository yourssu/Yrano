# useInterval

`useInterval` 커스텀 훅은 특정 간격마다 주어진 콜백 함수를 실행하기 위해 사용됩니다.
이 훅은 `useEffect`와 `useRef`를 활용하여 콜백 함수와 간격 타이머를 관리합니다.

## API

```ts
useInterval(callback: () => void, interval: number)
```

#### Parameters

- `callback` (function): 실행될 콜백 함수입니다.
- `interval` (number): 콜백 함수가 실행될 간격(밀리초)입니다.

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

이 훅은 내부적으로 두 개의 `useEffect`를 사용합니다:

1. 첫 번째 `useEffect`는 콜백 함수를 최신 상태로 유지합니다.
2. 두 번째 `useEffect`는 주어진 간격마다 콜백 함수를 실행하는 타이머를 설정합니다.

`interval`이 변경되거나 `null`로 설정되면 타이머가 갱신되거나 해제됩니다.
