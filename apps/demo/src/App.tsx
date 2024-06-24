import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Drawer } from './Drawer';
import { Home } from './Home';
import { YLSWrapper } from '@yourssu/logging-system-react';

export const App = () => {
  return (
    <YLSWrapper baseURL={'https://7ybvghftyfxchg'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drawer" element={<Drawer />}>
            <Route path=":id" element={<Drawer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </YLSWrapper>
  );
};
