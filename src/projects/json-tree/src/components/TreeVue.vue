<script setup lang="ts">
import TreeVue from "vue3-tree-vue";
import { type TreeViewItem } from "vue3-tree-vue/dist/types/src/types";

import { ref } from "vue";

const selectedItems = ref<TreeViewItem[]>([]);

const selectedItem = ref();

const items = ref([
  {
    id: "numberOrString",
    name: "Root Node",
    treeNodeSpec: {
      expanded: true,
    },
    children: [
      { id: 1, name: "Child Node" },
      { id: "node2", name: "Second Child" },
    ],
  },
]);
</script>

<template>
  <div class="container">
    <!-- Default makes items selectable (one at a time) -->
    <TreeVue
      :items="items"
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
    </TreeVue>
  </div>
  <div>
    <pre>{{ selectedItem }}</pre>
  </div>
</template>

<style scoped></style>
