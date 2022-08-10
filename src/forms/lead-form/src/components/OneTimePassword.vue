<script setup lang="ts">
const props = defineProps({
  context: Object,
});

const handleInput = (e: Event) => {
  if (!props || !props.context) return;
  //if (!e || !e.target) return;
  const target = e.target as HTMLInputElement;
  props.context.node.input(target.value);
};
</script>

<template>
  <div>
    <input @input="handleInput" :value="props?.context?._value" />
    <pre>{{ props?.context?._value }}</pre>
  </div>
</template>
