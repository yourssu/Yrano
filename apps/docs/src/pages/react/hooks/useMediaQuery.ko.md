# useMediaQuery

`useMediaQuery`는 React 컴포넌트에서 미디어 뭐리를 쉽게 사용할 수 있게 해주는 커스텀 React 훅입니다.
이 훅은 `window.matchMedia` API를 활용하여 뷰포트의 상태 변화를 감지하고 지정된 미디어 쿼리가 현재 뷰포트와 일치하는지 확인합니다.

## API

```ts
useMediaQuery(query: string);
```

### Parameters

- `query` (string): 현재 뷰포트와 일치시키고자 하는 미디어 쿼리 문자열입니다.

### Return value

- `isMatch` (boolean): 미디어 쿼리가 현재 뷰포트와 일치하는지 boolean 값으로 나타냅니다.

## Examples

```jsx
import { useMediaQuery } from './useMediaQuery';

const MyComponent = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div>
      {isLargeScreen ? (
        <p>The viewport is at least 1024 pixels wide</p>
      ) : (
        <p>The viewport is less than 1024 pixels wide</p>
      )}
    </div>
  );
};
```

## Notes

- 이 훅은 최신 브라우저에서 널리 지원되는 `window.matchMedia` API에 의존합니다. 그러나 오래된 브라우저의 경우 폴리필을 포함해야 할 수도 있습니다.
- `query` 매개변수가 유효한 미디어 쿼리 문자열로 올바르게 포맷되어 있는지 확인해야 합니다.
