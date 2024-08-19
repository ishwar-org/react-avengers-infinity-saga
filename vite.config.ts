import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "src/assets/*"),
          dest: "./assets",
        },
        {
          src: path.resolve(__dirname, 'src/styles/constants.module.css'),
          dest: './styles',
        },
      ],
    }),
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
