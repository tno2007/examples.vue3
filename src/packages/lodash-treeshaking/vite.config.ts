import { fileURLToPath, URL } from "node:url";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),
  visualizer({
    emitFile: true,
    filename: "stats.html",
  }) as PluginOption,
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
