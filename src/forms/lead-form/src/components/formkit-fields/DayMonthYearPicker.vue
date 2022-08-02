<script setup lang="ts">
import { onMounted, reactive } from "vue";

const props = defineProps({
  context: Object,
});

const data = reactive({
  days: [] as number[],
  years: [] as number[],
  months: [] as string[],
});

function handleInput(e: Event, ref: string) {
  if (!e || !e.target) return;
  console.log("ref", ref);

  const target = e.target as HTMLInputElement | HTMLSelectElement;
  props?.context?.node.input(target.value);
}

onMounted(() => {
  data.days = [...Array(31)].map((v, i) => {
    return ++i;
  });

  data.months = Array.from({ length: 12 }, (item, i) => {
    return new Date(0, i).toLocaleString("en-US", { month: "long" });
  });

  let currentYear = new Date().getUTCFullYear();
  data.years = [...Array(100)].map((v, i) => {
    return currentYear--;
  });
});
</script>

<template>
  <!--
  <input @input="handleInput" :value="props?.context?._value" />
  -->
  <select class="formkit-input" @change="handleInput($event, 'd')">
    <option class="formkit-option" v-for="d in data.days">{{ d }}</option>
  </select>
  <select class="formkit-input" @change="handleInput($event, 'm')">
    <option class="formkit-option" v-for="m in data.months">{{ m }}</option>
  </select>
  <select class="formkit-input" @change="handleInput($event, 'y')">
    <option class="formkit-option" v-for="y in data.years">{{ y }}</option>
  </select>
</template>
