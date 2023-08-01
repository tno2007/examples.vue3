<script setup lang="ts">
import { ref, type PropType } from "vue";
import ListItem from "./Example.vue";
import UlComponent from "./ul-component.vue";
import { useAppStore } from "../../stores/app";

const store = useAppStore();
</script>

<template>
  <ul-component :items="store.tree"></ul-component>
</template>
