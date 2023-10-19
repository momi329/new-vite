import { resolve } from "path";

// 依據專案內部的情況所設置 HTML 進入點路徑
const getPageHTML = (rootDir: string, pageName: string) =>
  resolve(rootDir, `${pageName}.html`);

export default function (rootDir: string, pageNames: string[]) {
  return {
    assetsDir: "",
    rollupOptions: {
      input: {
        index: resolve(rootDir, "index.html"),
        ...pageNames.reduce((inputConfig: { [key: string]: string }, name) => {
          inputConfig[`${name}`] = getPageHTML(rootDir, name);
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
  };
}
