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
  <input
    @input="handleInput"
    :value="props?.context?._value"
    class="formkit-input d-block"
    type="text"
  />

  <pre class="d-none d-block">{{ props?.context?._value }}</pre>
</template>

<style lang="scss">
.d-none {
  display: none !important;
}
.d-block {
  display: block;
}
</style>
