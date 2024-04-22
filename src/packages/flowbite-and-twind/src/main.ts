import { createApp } from "vue";

import { install } from "@twind/core";
import twindConfig from "../twind.config";
install(twindConfig);

import App from "./App.vue";
const app = createApp(App);

app.mount("#app");
