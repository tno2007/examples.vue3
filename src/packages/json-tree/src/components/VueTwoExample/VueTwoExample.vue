<script setup lang="ts">
import { ref } from "vue";
import SimpleTree from "./components/list.vue";
import { useAppStore } from "../../stores/app";

const store = useAppStore();

const a = store.tree;
</script>

<template>
  <!--
<ul id="demo"></ul>
  -->

  <!-- next up -->
  <SimpleTree :items="store.tree">
    <!-- level 1 -->
    <template #level1="level1">
      <pre>{{ level1.vBind.item.name }}</pre>
    </template>
  </SimpleTree>
</template>
