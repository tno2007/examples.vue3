<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

const schema = ref<any[]>([
  {
    $formkit: "text",
    label: "Name",
    validation: "required",
  },
]);

onMounted(() => {});
</script>

<template>
  <FormKitSchema :schema="schema"></FormKitSchema>
</template>

<style lang="scss"></style>
