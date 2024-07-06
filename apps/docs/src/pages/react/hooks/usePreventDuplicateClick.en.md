# usePreventDuplicateClick

The `usePreventDuplicateClick` hook prevents duplicate clicks on a button or other clickable elements by disabling the
click handler while an asynchronous callback function is being executed. This ensures that the callback is not called
multiple times concurrently, which is useful for avoiding issues such as submitting a form multiple times.

## API

```ts
function usePreventDuplicateClick(): { disabled: boolean; handleClick: (callback: () => Promise<void>) => void };
```

## Parameters

None

## Return value

- `disabled` (boolean): A state indicating whether the click handler is currently disabled.
- `handleClick` (function): A function that takes an asynchronous callback function as an argument and ensures it is
  only executed once at a time.

```jsx
import React from 'react';
import { usePreventDuplicateClick } from './usePreventDuplicateClick';

const ExampleComponent = () => {
  const { disabled, handleClick } = usePreventDuplicateClick();

  const handleSubmit = async () => {
    // Simulated async operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted!');
  };

  return (
    <div>
      <button onClick={() => handleClick(handleSubmit)} disabled={disabled}>
        {disabled ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};
```

## Notes

- This hook internally manages a `loadingRef` to track whether the callback is currently
  executing (`loadingRef.current`).
- It sets the `disabled` state of the button to prevent multiple clicks until the callback completes.
- This pattern is commonly used in UI elements such as forms to prevent duplicate user actions.