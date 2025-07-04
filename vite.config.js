import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        counter: "src/components/counter/main.js",
        "add-to-cart": "src/components/buttons/main.js",
      },
      output: {
        dir: "assets",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
    emptyOutDir: false,
    watch: {
      ignored: ["**/assets/**"],
    },
  },
});
