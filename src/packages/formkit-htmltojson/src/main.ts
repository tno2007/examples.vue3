import { createApp } from "vue";
import { createPinia } from "pinia";
import { defaultConfig, plugin } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'


import App from "./App.vue";
const app = createApp(App);

const config = defaultConfig({
    plugins: [createAutoAnimatePlugin()],
});

import "virtual:uno.css";

app.use(plugin, config);

app.use(createPinia());

app.use(VueMonacoEditorPlugin, {
    paths: {
      // The recommended CDN config
      //vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs'
      vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs"
    },
  })

app.mount("#app");
