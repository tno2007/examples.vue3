import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@formkit/themes/genesis";

// create app
const app = createApp(App);

// pinia
app.use(createPinia);

// # formkit
import "@formkit/themes/genesis";
import "@formkit/pro/genesis";
import { plugin, defaultConfig, createInput } from "@formkit/vue";
import { createProPlugin, inputs } from "@formkit/pro";

// ## auto animate
import { createAutoAnimatePlugin } from "@formkit/addons";

// ## formkit pro
const proPlugin = createProPlugin("fk-349d4d016", inputs);

// # formkit custom fields
import MaskedInput from "../../../common/formkit-fields/MaskedInput.vue";
const maskedInput = createInput(MaskedInput);

// ## formkit  config
const config = defaultConfig({
  inputs: {
    maskedInput: maskedInput,
  },
  plugins: [proPlugin, createAutoAnimatePlugin()],
});

app.use(plugin, config);

// mount app
app.mount("#app");
