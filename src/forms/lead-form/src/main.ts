import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";

import App from "./App.vue";
import "@formkit/themes/genesis";

const app = createApp(App);

app.use(plugin, defaultConfig);

app.use(createPinia());
app.mount("#app");
