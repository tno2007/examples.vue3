<script setup lang="ts">
import Take1 from "./Take1.vue";
import Take2 from "./Take2.vue";

const components = [Take1, Take2];

const currentComponent = components[1];
</script>

<template>
  <component :is="currentComponent"></component>
</template>

<style></style>
