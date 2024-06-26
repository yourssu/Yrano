import { useState } from 'react';

import { LogClick, LogScreen } from '@yourssu/logging-system-react';
import { useLocation } from 'react-router-dom';

export const Drawer = () => {
  const [count, setCount] = useState(0);
  const router = useLocation();

  return (
    <>
      <h1>Drawer</h1>
      <div className="card">
        <LogScreen
          params={{
            userId: '',
            version: 1,
            event: {
              name: 'view',
              path: router.pathname,
            },
          }}
        >
          <LogClick
            params={{
              userId: '',
              version: 2,
              event: {
                name: 'click',
                screen: 'drawer',
              },
            }}
          >
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          </LogClick>
        </LogScreen>
      </div>
    </>
  );
};
