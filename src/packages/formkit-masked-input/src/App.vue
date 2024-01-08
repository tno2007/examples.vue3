<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

const message = ref<string>("");

const formData = ref({});

onMounted(() => {
  message.value = "Vue";
});
</script>

<template>
  <pre>Hello, {{ message }}</pre>

  <FormKit type="form" v-model="formData">
    <FormKit
      type="text"
      name="number_val"
      label="I'm a number"
      help="Although text-based inputs return strings by default, this value will be cast to a number."
      prefixIcon="multiCurrency"
    />
    <FormKit
      type="maskedInput"
      name="maskedInput1"
      label="I'm a number"
      help="Although text-based inputs return strings by default, this value will be cast to a number."
    />
  </FormKit>
  <pre wrap>{{ formData }}</pre>
</template>

<style lang="scss"></style>
