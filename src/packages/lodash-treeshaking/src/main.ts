import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
const app = createApp(App);

import { deepSortObject } from "./test";

const ds = deepSortObject([
  {
    $el: "form",
    children: [
      {
        $el: "label",
        children: "Search",
        attrs: {
          for: "default-search",
          class:
            "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
        },
      },
      {
        $el: "div",
        attrs: {
          class: "relative",
        },
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    $el: "path",
                    attrs: {
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z",
                    },
                  },
                ],
                $el: "svg",
                attrs: {
                  class: "w-4 h-4 text-gray-500 dark:text-gray-400",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 20 20",
                },
              },
            ],
            $el: "div",
            attrs: {
              class:
                "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
            },
          },
          {
            children: [],
            $el: "input",
            attrs: {
              type: "search",
              id: "default-search",
              class:
                "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "Search for a candidate",
              required: null,
            },
          },
          {
            children: "Search",
            $el: "button",
            attrs: {
              type: "submit",
              class:
                "text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            },
          },
        ],
      },
    ],
  },
  {
    $el: "div",
    children: "B",
  },
]);

app.use(createPinia());
app.mount("#app");
