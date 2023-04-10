import { ConfigEnv, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from "rollup-plugin-visualizer";
import react from '@vitejs/plugin-react';

export default ({}: ConfigEnv) => {
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      visualizer(),
    ],
    server: {}
  })
}