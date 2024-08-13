import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import alias from '@rollup/plugin-alias';
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: path.resolve(__dirname, "src/assets/*"),
    //       dest: "./assets",
    //     },
    //     {
    //       src: path.resolve(__dirname, "src/components/*"),
    //       dest: "./components",
    //     },
    //     {
    //       src: path.resolve(__dirname, "src/types/*"),
    //       dest: "./types",
    //     },
    //     {
    //       src: path.resolve(__dirname, "src/utils/*"),
    //       dest: "./utils",
    //     },
    //   ],
    // }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-avengers-infinity-saga",
      formats: ["es", "umd"],
      fileName: (format) => `react-avengers-infinity-saga.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          classnames: "classNames",
        },
      },
      plugins: [
        alias({
          entries: [
            { find: '@react-avengers-infinity-saga/components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@react-avengers-infinity-saga/types', replacement: path.resolve(__dirname, 'src/types') },
            { find: '@react-avengers-infinity-saga/utils', replacement: path.resolve(__dirname, 'src/utils') },
          ],
        }),
      ],
    },
  },
  css: {
    modules: {
      generateScopedName: (name, file) => {
        const componentName = path.basename(path.dirname(file));
        return `react-avengers-infinity-saga-${componentName.toLowerCase()}--${name}`;
      },
    },
  }
});
