import path from 'node:path';

import react from '@vitejs/plugin-react';
import glob from 'fast-glob';
import external from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const modules = glob.sync('src/components/**/index.tsx', { stats: true });
const entries = modules.reduce((prev, curr) => {
  const entryName = curr.path.replace('src/components/', '').replace('/index.tsx', '');
  return {
    ...prev,
    [entryName]: path.resolve(__dirname, curr.path),
  };
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'PracticeStorybookViteLibrary',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
        ...entries,
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].[format].js',
      },
    },
  },
  plugins: [
    dts({ outputDir: 'dist/types' }),
    react(),
    tsconfigPaths(),
    external(),
    visualizer({ open: true }),
  ],
});
