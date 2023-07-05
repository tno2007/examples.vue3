import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
const app = createApp(App);

import "virtual:uno.css";

app.use(createPinia());
app.mount("#app");
