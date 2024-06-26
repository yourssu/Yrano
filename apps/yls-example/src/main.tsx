import { YLSWrapper } from '@yourssu/logging-system-react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const baseURL = import.meta.env.VITE_API_YLS_URL;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <YLSWrapper baseURL={baseURL}>
    <App />
  </YLSWrapper>
);
