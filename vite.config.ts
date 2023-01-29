import path from 'node:path';

import react from '@vitejs/plugin-react';
import extenral from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'PracticeStorybookViteLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
  },
  plugins: [
    dts({ insertTypesEntry: true }),
    react(),
    tsconfigPaths(),
    extenral(),
    visualizer({ open: true }),
  ],
});
