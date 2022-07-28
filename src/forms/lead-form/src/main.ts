import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";

import App from "./App.vue";
import "@formkit/themes/genesis";

const app = createApp(App);

app.use(
  plugin,
  defaultConfig({
    plugins: [createAutoAnimatePlugin()],
  })
);

app.use(createPinia());
app.mount("#app");
