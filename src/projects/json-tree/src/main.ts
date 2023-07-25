//import "./assets/main.css";

/*
import { install } from "@twind/core";
import config from "../twind.config";
install(config);
*/

// Supports weights 100-900
import "@fontsource-variable/montserrat";
import "virtual:uno.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
