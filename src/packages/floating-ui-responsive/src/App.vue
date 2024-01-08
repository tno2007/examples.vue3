<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import {
  useFloating,
  offset,
  autoPlacement,
  shift,
  flip,
  size,
} from "@floating-ui/vue";

const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating, {
  placement: "right",
  middleware: [
    //shift(),
    //flip({
    //  crossAxis: false,
    //}),
    //autoPlacement({
    //alignment: "start",
    //allowedPlacements: ["right", "bottom"],
    //}),
    // offset(10),
  ],
});

const message = ref<string>("");

onMounted(() => {
  message.value = "Vue";
});
</script>

<template>
  di
  <div class="w-100 h-200 bg-emerald-300 flex" ref="reference"></div>
  <div ref="floating" class="w-50 h-100 bg-red-200" :style="floatingStyles">
    I am floating!
  </div>
</template>

<style lang="scss"></style>
