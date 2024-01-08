import { fileURLToPath, URL } from "node:url";
import UnoCSS from "unocss/vite";
import { defineConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import { presetWind } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //UnoCSS({
    //  presets: [presetWind()],
    //}),
    vue(),
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
