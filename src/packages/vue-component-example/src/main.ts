import { createApp } from "vue";
import { createPinia } from "pinia";
import { defaultConfig, plugin, defineFormKitConfig } from "@formkit/vue";

import config from "../formkit.config";

// import "virtual:uno.css";

import { install } from "@twind/core";
import twindConfig from "../twind.config";
install(twindConfig);

import App from "./App.vue";
const app = createApp(App);

app.use(plugin, defaultConfig(config()));

app.use(createPinia());
app.mount("#app");
