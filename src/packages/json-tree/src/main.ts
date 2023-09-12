// Supports weights 100-900
import "@fontsource-variable/montserrat";
// import "virtual:uno.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";

import { install } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faGlobe,
  faUser,
  faFolderOpen,
  faExclamationTriangle,
  faCircle,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faHome,
  faGlobe,
  faUser,
  faFolderOpen,
  faExclamationTriangle,
  faCircle,
  faRoute
);

/**/
install({
  presets: [presetAutoprefix(), presetTailwind()],
  // hash: false,
});

const app = createApp(App);

app.use(createPinia());

app.use(autoAnimatePlugin);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
