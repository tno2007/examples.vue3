import { createApp } from "vue";
import { createPinia } from "pinia";
const app = createApp(App);

import { plugin } from "@formkit/vue";
app.use(plugin);

import "@formkit/themes/genesis";

import App from "./App.vue";

app.use(createPinia());
app.mount("#app");
