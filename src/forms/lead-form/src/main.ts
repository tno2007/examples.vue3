import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig, createInput } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";

import DayMonthYearPicker from "./components/formkit-fields/DayMonthYearPicker.vue";
const dayMonthYearPicker = createInput(DayMonthYearPicker);

import App from "./App.vue";
import "@formkit/themes/genesis";

const app = createApp(App);

app.use(
  plugin,
  defaultConfig({
    inputs: {
      dayMonthYearPicker: dayMonthYearPicker,
    },
    plugins: [createAutoAnimatePlugin()],
  })
);

app.use(createPinia());
app.mount("#app");
