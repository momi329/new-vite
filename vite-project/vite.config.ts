/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import importToCDN from "vite-plugin-cdn-import";
import {
  getTestOptions,
  getBuildOptions,
  getPreviewOptions,
  getServeOptions,
} from "./configs/vite";

const pageNames = ["search"];

export default defineConfig({
  define: { "import.meta.vitest": undefined },
  cacheDir: "../../node_modules/.vite/hotel",

  plugins: [
    react(),
    tsconfigPaths(),
    importToCDN({
      modules: [
        {
          name: "react",
          var: "React",
          path: `umd/react.production.min.js`,
        },
        {
          name: "react-dom",
          var: "ReactDOM",
          path: `umd/react-dom.production.min.js`,
        },
      ],
    }),
  ],

  server: { ...getServeOptions() },

  build: { ...getBuildOptions(__dirname, pageNames) },

  preview: { ...getPreviewOptions() },

  test: { ...getTestOptions() },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
});
