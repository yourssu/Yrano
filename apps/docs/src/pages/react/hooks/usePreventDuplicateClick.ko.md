# usePreventDuplicateClick

`usePreventDuplicateClick` 훅은 버튼이나 기타 클릭 가능한 요소에서 중복 클릭을 방지합니다. 이는 비동기 콜백 함수가 실행 중일 때 클릭 핸들러를 비활성화하여, 콜백이 여러 번 동시에 호출되는
것을
방지합니다. 이는 폼을 여러 번 제출하는 등의 문제를 방지하는 데 유용합니다.

## API

```ts
function usePreventDuplicateClick(): { disabled: boolean; handleClick: (callback: () => Promise<void>) => void };
```

## Parameters

None

## Return value

- `disabled` (boolean): 클릭 핸들러가 현재 비활성화된 상태인지를 나타내는 상태 값입니다.
- `handleClick` (function): 비동기 콜백 함수를 인자로 받아 한 번에 한 번씩만 실행되도록 보장하는 함수입니다.

```jsx
import React from 'react';
import { usePreventDuplicateClick } from './usePreventDuplicateClick';

const ExampleComponent = () => {
  const { disabled, handleClick } = usePreventDuplicateClick();

  const handleSubmit = async () => {
    // 비동기 작업 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('폼 제출됨!');
  };

  return (
    <div>
      <button onClick={() => handleClick(handleSubmit)} disabled={disabled}>
        {disabled ? '제출 중...' : '제출'}
      </button>
    </div>
  );
};
```

## Notes

- 이 훅은 내부적으로 `loadingRef`를 관리하여 현재 콜백이 실행 중인지를 추적합니다 (`loadingRef.current`).
- 콜백이 완료될 때까지 여러 번의 클릭을 방지하기 위해 버튼의 `disabled` 상태를 설정합니다.
- 이 패턴은 주로 중복 사용자 작업을 방지해야 하는 폼 등의 UI 요소에서 사용됩니다.