import { createApp } from "vue";
import { createPinia } from "pinia";
import { defaultConfig, plugin } from "@formkit/vue";
import {
  createAutoAnimatePlugin,
  createMultiStepPlugin,
} from "@formkit/addons";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

// import App from "./App.vue";
import App from "./AppFullSchema.vue";

const app = createApp(App);

app.use(autoAnimatePlugin);

const config = defaultConfig({
  plugins: [createAutoAnimatePlugin(), createMultiStepPlugin()],
});
app.use(plugin, config);

import VueTransitions from "@morev/vue-transitions";
app.use(VueTransitions);
import "@morev/vue-transitions/styles";

import "virtual:uno.css";
import "@formkit/addons/css/multistep";
import "@formkit/themes/genesis";

app.use(createPinia());
app.mount("#app");
