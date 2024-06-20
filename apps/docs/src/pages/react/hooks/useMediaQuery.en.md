# useMediaQuery

`useMediaQuery` is a custom React hook that allows you to easily use media queries in your React components.
It leverages the `window.matchMedia` API to listen for changes in the viewport and determine if a specified media query matches the current state of the viewport.

## API

```ts
useMediaQuery(query: string);
```

### Parameters

- `query` (string): A media query string that you want to match against the current viewport.

### Return value

- `isMatch` (boolean): A boolean value indicating whether the media query matches the current viewport.

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

- This hook relies on the `window.matchMedia` API, which is widely supported in modern browsers. However, for older browsers, you might need to include a polyfill.
- Ensure that the `query` parameter is correctly formatted as a valid media query string.
