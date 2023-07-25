<script setup lang="ts">
import { ref, type PropType } from "vue";
import List from "./List.vue";
import { type IListItem } from "./typings";

import { useAppStore } from "../../stores/app";

const store = useAppStore();

const listLevelClasses = {
  level1: {
    ul: "m-0 p-0 list-none",
    li: "b",
  },
  level2: {
    ul: "a",
    li: "b",
  },
};

/*
# TODO
- add scoped slots. The final piece of the puzzle!
- add a sample multilevel styling
- I can let Ashley know perhaps by now
- For later: how will I handle the click events? collapse and expand?
*/
</script>

<template>
  <List :items="store.tree" list-level-classes="listLevelClasses">
    <template #level1>
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-none bg-transparent border-none"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        aria-expanded="false"
      >
        <svg
          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path
            d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
          ></path>
        </svg>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">E-commerce</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          ></path>
        </svg>
      </button>
    </template>
    <template #level2>
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-none bg-transparent border-none"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        aria-expanded="false"
      >
        <svg
          width="20"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 7H7V17H17V7ZM4 4V20H20V4H4Z"
            fill="currentColor"
          />
        </svg>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">E-commerce</span>
      </button>
    </template>
    <template #level3>
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-none bg-transparent border-none"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        aria-expanded="false"
      >
        <svg
          width="20"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
            fill="currentColor"
          />
        </svg>
        <span class="flex-1 ml-3 text-left whitespace-nowrap font-extralight"
          >E-commerce</span
        >
      </button>
    </template>
    <template #level4>
      <div>
        <a
          href="#"
          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-10 group hover:bg-gray-100 no-underline bg-none bg-transparent border-none"
          >Products</a
        >
      </div>
    </template>
    <template #level5>
      <div>
        <a
          href="#"
          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-10 group hover:bg-gray-100 no-underline bg-none bg-transparent border-none"
          >Products</a
        >
      </div>
    </template>
  </List>
</template>

<style lang="scss"></style>

<!--
      <div class="h-6 bg-gray-500 flex">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 block"
        >
          <path d="M5 5H19V19H16L16 8H5V5Z" fill="currentColor" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 19C12.7614 19 15 16.7614 15 14C15 11.2386 12.7614 9 10 9C7.23858 9 5 11.2386 5 14C5 16.7614 7.23858 19 10 19ZM10 16C11.1046 16 12 15.1046 12 14C12 12.8954 11.1046 12 10 12C8.89543 12 8 12.8954 8 14C8 15.1046 8.89543 16 10 16Z"
            fill="currentColor"
          />
        </svg>
        <div class="m-0 flex-1 flex-auto leading-relaxed">
          <span>Help Center</span>
        </div>
        <button
          type="button"
          title="toggle"
          class="p-0 w-8 h-8 -mx-12 bg-none bg-transparent"
        >
          <svg
            class="shrink-0 fill-current arrow-icon MuiBox-root muiltr-z3b6pe"
            size="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <use
              xlink:href="assets/icons/heroicons-solid.svg#chevron-right"
            ></use>
          </svg>
        </button>
      </div>

-->
