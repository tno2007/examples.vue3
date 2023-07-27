<script setup lang="ts">
import { ref, type PropType } from "vue";
import List from "./List.vue";
import { type IListItem, type IListLevelStyle } from "./typings";

import { useAppStore } from "../../stores/app";

const store = useAppStore();

const listLevelStyles: IListLevelStyle[] = [
  {
    ul: "bg-red-100 m-0 p-0 list-none",
    li: "will-apply",
  },
  {
    ul: "bg-red-200 m-0 p-0 list-none",
    li: "li-2",
  },
  {
    ul: "bg-red-300 m-0 p-0 list-none",
    li: "li-3",
  },
  {
    ul: "bg-red-400 m-0 p-0 list-none",
    li: "li-4",
  },
  {
    ul: "bg-red-500 m-0 p-0 list-none",
    li: "li-5",
  },
];

const testVar = "everything thats wrong";

/*
# TODO
- add scoped slots. The final piece of the puzzle!
- add a sample multilevel styling
- I can let Ashley know perhaps by now
- For later: how will I handle the click events? collapse and expand?
*/

/*
    <template #gimme="slotProps">
      <h2>Main template</h2>
      <h3>Blommo</h3>
      <div
        class="text-indigo-700 font-bold italic hover:text-rose-700 hover:bg-lime-100 cursor-pointer border-black border-2 border-solid"
      >
        {{ slotProps.slotVariable1 }}
      </div>
    </template>
*/
</script>

<template>
  <List :items="store.tree" :list-level-styles="listLevelStyles">
    <template #level1="level1Props">
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-none bg-transparent border-none"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        aria-expanded="false"
      >
        <i class="fa-solid fa-dice-one"></i>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">
          {{ level1Props }}
        </span>
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

    <template #level2="level2Props">
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-none bg-transparent border-none"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        aria-expanded="false"
      >
        <i class="fa-solid fa-dice-two"></i>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">
          {{ level2Props }}
        </span>
      </button>
    </template>
    <!--

    <template #level3>
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-none bg-transparent border-none"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        aria-expanded="false"
      >
        <i class="fa-solid fa-dice-three"></i>
        <span class="flex-1 ml-3 text-left whitespace-nowrap font-extralight"
          >E-commerce</span
        >
      </button>
    </template>
    <template #level4>
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-none bg-transparent border-none"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        aria-expanded="false"
      >
        <i class="fa-solid fa-dice-four"></i>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">E-commerce</span>
      </button>
    </template>
    <template #level5>
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-none bg-transparent border-none"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        aria-expanded="false"
      >
        <i class="fa-solid fa-dice-five"></i>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">E-commerce</span>
      </button>
    </template>
    -->
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
