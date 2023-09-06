import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import App from "./App.vue";
import "@formkit/themes/genesis";

// create app
const app = createApp(App);

// pinia
app.use(createPinia);

// vue-router
app.use(router);

// # formkit
import "@formkit/themes/genesis";
import "@formkit/pro/genesis";
import { createInput, plugin, defaultConfig } from "@formkit/vue";
import { createProPlugin, inputs } from "@formkit/pro";

// ## auto animate
import { createAutoAnimatePlugin } from "@formkit/addons";

// ## formkit pro
const proPlugin = createProPlugin("fk-349d4d016", inputs);

// # formkit custom fields
import OneTimePassword from "../../../common/formkit-fields/OneTimePassword.vue";
const otp = createInput(OneTimePassword);

import RepeatableGroup from "../../../common/formkit-fields/RepeatableGroup.vue";
const repeatableGroup = createInput(RepeatableGroup);

// ## formkit  config
const config = defaultConfig({
  inputs: {
    otp: otp,
    repeatableGroup: repeatableGroup,
  },
  plugins: [proPlugin, createAutoAnimatePlugin()],
});

app.use(plugin, config);

// mount app
app.mount("#app");
