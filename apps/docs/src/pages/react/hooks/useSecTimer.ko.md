# useSecTimer

`useSecTimer` 훅은 주어진 시간(초)에서 시작하여 0까지 카운트다운하는 타이머 기능을 제공합니다.
타이머를 초기화하고, 타이머 종료 여부를 확인할 수 있습니다.

## Features

- 카운트다운 타이머: 주어진 시간(초)에서 시작하여 0까지 카운트다운합니다.
- 리셋 기능: 타이머를 처음 값으로 초기화할 수 있습니다.
- 타이머 종료 확인: 타이머 종료 여부를 확인할 수 있습니다.

## API

```ts
useSecTimer(seconds: number)
```

### Parameters

- `seconds` (number): 카운트다운 타이머의 시간(초)입니다.

### Return value

- `leftTime` (number): 타이머에 남은 시간(초)입니다.
- `isTimerEnd` (boolean): 타이머가 0에 도달했는지 여부를 나타냅니다.
- `resetTimer` (function): 타이머를 처음 값으로 초기화하는 함수입니다.

## Examples

```jsx
const TimerComponent = () => {
  const { leftTime, isTimerEnd, resetTimer } = useSecTimer(10);

  return (
    <div>
      <div>Left time: {leftTime} seconds</div>
      <div>Timer end: {isTimerEnd ? 'Yes' : 'No'}</div>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
```
