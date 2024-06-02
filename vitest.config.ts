import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    dir: './packages',
    globals: true,
    environment: 'jsdom',
  },
});
