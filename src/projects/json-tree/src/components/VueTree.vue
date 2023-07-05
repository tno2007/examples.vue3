<script setup lang="ts">
  import { TreeView } from "@grapoza/vue-tree"
import { ref } from "vue";
  const dataModel = ref([
  {
    id: "numberOrString",
    label: "Root Node",
    treeNodeSpec: {
      state: {
        expanded: true,
      }
      
    },
    children: [
      {id: 1, label: "Child Node"},
      {id: "node2", label: "Second Child"}
    ]
  }
])
</script>

<template>
  <div class="container">
    <tree-view :selectionMode="'single'"  id="my-tree" :initial-model="dataModel"></tree-view>
  </div>
</template>

<style scoped>
</style>
