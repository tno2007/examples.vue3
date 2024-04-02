<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

const message = ref<string>("");

onMounted(() => {
  message.value = "Vue";
});
</script>

<template>
  <pre>Hello, {{ message }}</pre>
</template>

<style lang="scss"></style>
