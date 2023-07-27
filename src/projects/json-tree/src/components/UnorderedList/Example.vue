<script setup lang="ts">
import { ref, type PropType } from "vue";
import UlComponent from "./UlComponent.vue";
import ListItem from "./Example.vue";
import { useAppStore } from "../../stores/app";

const store = useAppStore();
</script>

<template>
  <UlComponent :items="store.tree"></UlComponent>
</template>
