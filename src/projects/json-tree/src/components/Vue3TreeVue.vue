<script setup lang="ts">
import Vue3TreeVue from "vue3-tree-vue";
import { useAppStore } from "../stores/app";

const store = useAppStore();

import { ref } from "vue";

const selectedItems = ref([]);

const selectedItem = ref();
</script>

<template>
  <div class="container">
    <!-- Default makes items selectable (one at a time) -->
    <Vue3TreeVue
      :items="store.tree"
      :isCheckable="false"
      :hideGuideLines="false"
      v-model:selectedItem="selectedItem"
    >
      <!-- Applying some simple styling to tree-items -->
      <template v-slot:item-prepend-icon="treeViewItem">
        <img
          src="./assets/folder.svg"
          alt="folder"
          v-if="treeViewItem.type === 'folder'"
          height="20"
          width="20"
        />
      </template>
    </Vue3TreeVue>
  </div>
  <div>
    <pre v-if="false">{{ selectedItem }}</pre>
  </div>
</template>

<style scoped></style>
