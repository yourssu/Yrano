# useSecTimer

`useSecTimer` is a custom React hook that provides a countdown timer functionality.
It allows you to set a timer that counts down from a specified number of seconds and provides functions to reset the timer and check if the timer has ended.

## Features

- Countdown Timer: Start a timer from a specified number of seconds and countdown to 0.
- Reset Functionality: Reset the timer to the initial value.
- Timer End Check: Easily check if the timer has reached 0.

## API

```ts
useSecTimer(seconds: number)
```

### Parameters

- `seconds` (number): The initial number of seconds for the countdown timer.

### Return value

- `leftTime` (number): The current time left on the timer in seconds.
- `isTimerEnd` (boolean): A boolean value that indicates whether the timer has reached 0.
- `resetTimer` (function): A function to reset the timer to the initial value.

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
