<script setup lang="ts">
import UlComponent from "./components/ul-li-component/ul-component.vue";
import type { IListLevelStyle } from "./components/ul-li-component/typings";
import { ref } from "vue";
import { useAppStore } from "./stores/app";
const store = useAppStore();
const opened = ref(false);
const listLevelStyles: IListLevelStyle[] = [
  {
    ul: "bg-red-200",
    li: "bg-amber-100",
  },
  {
    ul: "bg-yellow-200",
    li: "bg-green-200",
  },
  {
    ul: "bg-blue-200",
    li: "bg-indigo-400",
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
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <UlComponent :items="store.tree" :list-level-styles="listLevelStyles">
          <template #level1="data">
            <a>{{ data.label }}</a>
          </template>
          <template #level2="data">
            <h2>{{ data.label }}</h2>
          </template>
          <template #level3="data">
            <p class="font-extrabold">{{ data.label }}</p>
          </template>
        </UlComponent>
      </div>
    </div>

    <div>
      <h2>todo</h2>
    </div>
  </div>
</template>
