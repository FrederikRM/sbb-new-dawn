import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        "add-to-cart": "src/components/buttons/main.js",
        "main-style": "src/style.css",
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
      exclude: ["assets/**"],
    },
  },
});
