<script setup lang="ts">
const props = defineProps({
  toBeOrNotToBe: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div v-show="props.toBeOrNotToBe">
    <slot></slot>
  </div>
</template>
