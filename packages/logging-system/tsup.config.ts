import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    entry: './src/index.ts',
    resolve: true,
  },
  external: ['react', 'react-dom'],
  noExternal: ['crypto-js/sha256'],
  splitting: false,
  clean: true,
  sourcemap: true,
  minify: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  outDir: './dist',
});
