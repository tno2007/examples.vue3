<script setup lang="ts">
import { ref } from "vue";
import TreeItem from "./components/TreeItem.vue";

const treeData = ref({
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "wat" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }],
        },
        { name: "hello" },
        { name: "wat" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }],
        },
      ],
    },
  ],
});
</script>

<template>
  <ul id="demo">
    <TreeItem
      class="item"
      :item="treeData"
      ...make-folder="makeFolder"
      ...add-item="addItem"
    ></TreeItem>
  </ul>
</template>
