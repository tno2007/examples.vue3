import { createApp } from "vue";
import { createPinia } from "pinia";
import { defaultConfig, plugin } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";

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
  faBell,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faHome,
  faGlobe,
  faUser,
  faFolderOpen,
  faExclamationTriangle,
  faCircle,
  faRoute,
  faBell
);

import "virtual:uno.css";

import App from "./App.vue";
const app = createApp(App);

const config = defaultConfig({
  plugins: [createAutoAnimatePlugin()],
});

app.use(plugin, config);

app.use(createPinia());

app.component("fa-icon", FontAwesomeIcon);

// import { processNode } from "./helpers/nodeRecursion.ts.exclude";

const html = `<body>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in
    reverse chronological order.
  </p>
</body>`;

// var doc = new DOMParser().parseFromString(html, "text/xml");

// const a = processNode(doc);

// console.log(a);

import '@formkit/themes/genesis'

app.mount("#app");
