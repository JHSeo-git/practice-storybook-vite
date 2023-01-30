import react from '@vitejs/plugin-react';
import external from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const OUT_DIR = 'dist-lib';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    target: 'esnext',
    outDir: OUT_DIR,
    lib: {
      entry: './src/index.ts',
      name: 'PracticeStorybookViteLibrary',
      formats: ['es', 'cjs'],
      fileName: '[name]',
    },
    rollupOptions: {
      output: {
        preserveModules: true,
      },
    },
  },
  plugins: [
    dts({ outputDir: OUT_DIR, entryRoot: '.' }),
    react(),
    tsconfigPaths(),
    external(),
    visualizer(),
  ],
});
