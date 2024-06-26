## What is YLS?

YLS is a logging system used by the Yourssu club at Soongsil University.

User logs are stored in localStorage, and when 10 logs accumulate or when the user exits, the logs are sent to the backend via an API call.

The user's userId is handled as an unidentifiable value within YLS.

## Installation

1. Install YLS.

```bash
npm install @yourssu/logging-system-react

yarn add @yourssu/logging-system-react

pnpm install @yourssu/logging-system-react
```

2. Wrap the Root Component with YLSWrapper and set the baseURL.

```jsx
// When using vite
const baseURL = import.meta.env.VITE_API_YLS_URL;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <YLSWrapper baseURL={baseURL}>
    <App />
  </YLSWrapper>
);
```

## Usage

YLS handles the timestamp and platform internally.

The userId must be provided from the usage site, and the fields inside version and event must be filled with values provided by the PM.

## LogScreen

Tracks the screen that users enter.

## LogClick

Tracks the user's clicks (events).

```jsx
export const Home = () => {
  const [count, setCount] = useState(0);
  const router = useLocation();

  return (
    <>
      <LogScreen
        params={{
          userId: 'test',
          version: 1,
          event: {
            name: 'view',
            path: router.pathname,
          },
        }}
      >
        <LogClick
          params={{
            userId: 'test',
            version: 1,
            event: {
              name: 'click',
              screen: 'home',
            },
          }}
        >
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </LogClick>
      </LogScreen>
    </>
  );
};
```

## Products using YLS

[Soomsil-Web](https://github.com/yourssu/Soomsil-Web)

## Other versions repositories

[YLS-Android](https://github.com/yourssu/YLS-Android)

[YLS-iOS](https://github.com/yourssu/YLS-iOS)

[YLS-Backend](https://github.com/yourssu/YLS-Backend)
