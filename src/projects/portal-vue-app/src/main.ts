import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import type { Router } from "vue-router";
import { plugin, defaultConfig } from "@formkit/vue";
import config from "../formkit.config";

import App from "./App.vue";

import "./styles/app.css";

const app = createApp(App);

/**/
declare module "pinia" {
  export interface PiniaCustomProperties {
    router: Router;
  }
}

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);

app.use(router);

app.use(plugin, defaultConfig(config()));

app.mount("#app");
