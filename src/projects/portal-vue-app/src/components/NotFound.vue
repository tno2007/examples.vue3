<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>404</div>
  <div>{{ route.fullPath }}</div>
</template>
