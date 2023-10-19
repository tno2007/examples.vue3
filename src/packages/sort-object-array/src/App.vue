<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import o from "objectools";

const message = ref<string>("");


let schema = [
  {
    "children": [
      {
        "children": "Search",
        "$el": "label",
        "attrs": {
          "for": "default-search",
          "class": "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        }
      },
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "children": [],
                    "$el": "path",
                    "attrs": {
                      "stroke": "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      "d": "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    }
                  }
                ],
                "$el": "svg",
                "attrs": {
                  "class": "w-4 h-4 text-gray-500 dark:text-gray-400",
                  "aria-hidden": "true",
                  "xmlns": "http://www.w3.org/2000/svg",
                  "fill": "none",
                  "viewBox": "0 0 20 20"
                }
              }
            ],
            "$el": "div",
            "attrs": {
              "class": "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            }
          },
          {
            "children": [],
            "$el": "input",
            "attrs": {
              "type": "search",
              "id": "default-search",
              "class": "block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              "placeholder": "Search Mockups, Logos...",
              "required": null
            }
          },
          {
            "children": "Search",
            "$el": "button",
            "attrs": {
              "type": "submit",
              "class": "text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }
          }
        ],
        "$el": "div",
        "attrs": {
          "class": "relative"
        }
      }
    ],
    "$el": "form"
  }
];


let s = ref({
  "children": "Search",
  "$el": "label",
  "attrs": {
    "for": "default-search",
    "class": "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  }
});

let s2 = ref({
  children: "Search",
  $el: "label",
  attrs: {
    for: "default-search",
    class: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  }
});

const context = reactive({
  a: {}
})
context.a = Object.fromEntries(Object.entries(s).sort());
console.log(context.a);




onMounted(() => {
  message.value = "Vue";
});
</script>

<template>
  <pre>Hello, {{ message }}</pre>

  <pre>{{ context.a }}</pre>
</template>

<style lang="scss"></style>
