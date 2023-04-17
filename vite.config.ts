import react from '@vitejs/plugin-react';
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default () => {
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      visualizer(),
    ],
    server: {}
  });
};