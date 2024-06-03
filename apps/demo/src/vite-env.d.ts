/// <reference types="vite/client" />

declare global {
  interface Window {
    YLS_CONFIG: {
      baseURL: string;
    };
  }
}
