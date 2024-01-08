import { createApp } from "vue";
import { createPinia } from "pinia";

import { defaultConfig, plugin } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";

import App from "./App.vue";
const app = createApp(App);

const config = defaultConfig({
  plugins: [createAutoAnimatePlugin()],
});

app.use(plugin, config);

import "@formkit/themes/genesis";

app.use(createPinia());
app.mount("#app");
