import ReactDOM from 'react-dom/client';

import { App } from './App';

const baseURL = import.meta.env.VITE_API_YLS_URL;

window.YLS_CONFIG = {
  baseURL,
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
