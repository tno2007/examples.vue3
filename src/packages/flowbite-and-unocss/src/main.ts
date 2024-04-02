import { createApp } from "vue";
import { createPinia } from "pinia";
import { defaultConfig, plugin } from "@formkit/vue";

import config from "../formkit.config";

import "virtual:uno.css";
import "uno.css";
//import 'virtual:unocss-devtools'

import initUnocssRuntime from "@unocss/runtime";
initUnocssRuntime({
    /* options */
});

import App from "./App.vue";
const app = createApp(App);

app.use(plugin, defaultConfig(config()));

app.use(createPinia());
app.mount("#app");
