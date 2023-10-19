import { fileURLToPath, URL } from "node:url";
import { presetWind } from "unocss";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      theme: {
        colors: {
          gold: {
            50: "#dcac4c",
            100: "#d2a242",
            200: "#c89838",
            300: "#be8e2e",
            400: "#b48424",
            500: "#aa7a1a",
            600: "#a07010",
            700: "#966606",
            800: "#8c5c00",
            900: "#825200",
          },
          ocean: {
            50: "#4387a9",
            100: "#397d9f",
            200: "#2f7395",
            300: "#25698b",
            400: "#1b5f81",
            500: "#115577",
            600: "#074b6d",
            700: "#004163",
            800: "#003759",
            900: "#002d4f",
          },
          bright: "#f8f8f8",
          betty: "#0275ff",
        },
      },
    }),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
