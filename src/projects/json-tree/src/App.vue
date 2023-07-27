<script setup lang="ts">
// import VueTree from "./components/VueTree.vue";
// import Vue3TreeVue from "./components/Vue3TreeVue.vue";
import VueTwoExample from "./components/VueTwoExample/VueTwoExample.vue";
import SimpleSlot from "./components/SimpleSlot/SimpleSlot.vue";
import Sample from "./components/ListTree/Sample.vue";
import UlComponent from "./components/UnorderedList/UlComponent.vue";
import { ref } from "vue";
import { useAppStore } from "./stores/app";
import type { IListLevelStyle } from "./components/UnorderedList/typings";
const store = useAppStore();

const opened = ref(false);

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
</script>

<template>
  <div>
    <button @click="opened = !opened">Toggle</button>

    <div
      :class="[{ '-translate-x-full': opened }]"
      class="fixed top-20 left-0 z-40 w-64 h-screen transition-transform --sm:translate-x-0"
    >
      <div
        class="h-full px-3 py-4 overflow-y-auto bg-dark-400 dark:bg-gray-800"
      >
        <UlComponent :items="store.tree" v-if="false">
          <template #level1="data">
            <a href="#">{{ data.label }}</a>
          </template>
          <template #level2="data">
            <h2>{{ data.label }}</h2>
          </template>
          <template #level3="data">
            <p class="font-medium">{{ data.label }}</p>
          </template>
        </UlComponent>

        <!-- /// -->
        <UlComponent :items="store.tree" :list-level-styles="listLevelStyles">
        </UlComponent>
      </div>
    </div>
  </div>
</template>

<style></style>
