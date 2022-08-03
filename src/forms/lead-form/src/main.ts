import { createApp } from "vue";
import { createPinia } from "pinia";
import { createInput, plugin, defaultConfig } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";

import DayMonthYearPicker from "./components/formkit-fields/DayMonthYearPicker.vue";
const dayMonthYearPicker = createInput(DayMonthYearPicker);

import App from "./App.vue";
import "@formkit/themes/genesis";

import OneTimePassword from "./components/OneTimePassword.vue";
const otp = createInput(OneTimePassword);

const app = createApp(App);

app.use(
  plugin,
  defaultConfig({
    inputs: {
      otp: otp,
      dayMonthYearPicker: dayMonthYearPicker,
    },
    plugins: [createAutoAnimatePlugin()],
  })
);

app.use(createPinia());
app.mount("#app");
