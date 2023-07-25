import "./assets/main.css";

/*
import { install } from "@twind/core";
import config from "../twind.config";
install(config);
*/

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
