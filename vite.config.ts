/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { Plugin as importToCDN } from "vite-plugin-cdn-import";
import { resolve } from "path";

const pageNames = ["search"];
const proxy = {
  "/uhotelzkk": {
    target: "https://uhotelzkk.liontravel.com",
    secure: true,
    changeOrigin: true,
    rewrite: (path: string) => path.replace("/uhotelzkk", ""),
  },
};

// Don't touch =============================================

const getPageHTML = (rootDir: string, pageName: string) =>
  resolve(rootDir, `${pageName}.html`);

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

  server: {
    port: 4200,
    host: "localhost",
    proxy,
  },

  build: {
    assetsDir: "",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        ...pageNames.reduce((inputConfig: { [key: string]: string }, name) => {
          inputConfig[`${name}`] = getPageHTML(__dirname, name);
          return inputConfig;
        }, {}),
      },

      output: {
        assetFileNames: ({ name }: any) => {
          let extType = name?.split(".").at(-1) ?? "";
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/[name][extname]`;
          }

          return `[name]/[name]-[hash][extname]`;
        },

        // chunkFileNames: "[name]/js/[name]-[hash].js",

        entryFileNames: "[name]/[name]-[hash].js",
      },
    },
  },

  preview: {
    port: 4300,
    host: "localhost",
  },

  test: {
    includeSource: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    globals: true,
    cache: { dir: "../../node_modules/.vitest" },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
});
