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

  <SimpleTree :items="store.tree"> </SimpleTree>
</template>
