import { createApp } from "vue";
import { createPinia } from "pinia";
import { defaultConfig, plugin } from "@formkit/vue";
import {
  createAutoAnimatePlugin,
  createMultiStepPlugin,
} from "@formkit/addons";
import Vue3Transitions from "vue3-transitions";

// import App from "./App.vue";
import App from "./AppFullSchema.vue";

const app = createApp(App);

const config = defaultConfig({
  plugins: [createAutoAnimatePlugin(), createMultiStepPlugin()],
});
app.use(plugin, config);

app.use(Vue3Transitions);

import "@formkit/addons/css/multistep";
import "@formkit/themes/genesis";

app.use(createPinia());
app.mount("#app");
