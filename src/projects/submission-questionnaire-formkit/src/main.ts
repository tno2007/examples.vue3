import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig, createInput } from "@formkit/vue";

import App from "./App.vue";
import "@formkit/themes/genesis";

//import OneTimePassword from "@/common/formkit-fields/OneTimePassword.vue";
import OneTimePassword from "../../../common/formkit-fields/OneTimePassword.vue";
const otp = createInput(OneTimePassword);

import RepeatableGroup from "../../../common/formkit-fields/RepeatableGroup.vue";
const repeatableGroup = createInput(RepeatableGroup);

// create app
const app = createApp(App);

// pinia
app.use(createPinia());

// formkit
app.use(
  plugin,
  defaultConfig({
    inputs: {
      otp: otp,
      repeatableGroup: repeatableGroup,
    },
  })
);

// mount app
app.mount("#app");
