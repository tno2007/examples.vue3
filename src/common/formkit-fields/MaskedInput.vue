<!-- eslint-disable @typescript-eslint/no-empty-function -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { IMaskComponent } from "vue-imask";

const props = defineProps({
  context: Object,
});

const numberModel = ref("");

const data = reactive({
  //numberModel: "",
  onAccept: (value: string) => {
    console.log("onAccept", props.context);
    return;
  },
  onAcceptUnmasked: (unmaskedValue: string) => {
    console.log("onAcceptUnmasked", unmaskedValue);
    if (!props || !props.context) return;
    props.context.node.input(unmaskedValue);
    return;
  },
});

const handleInput = (e: Event) => {
  console.log("handleInput", e);

  if (!props || !props.context) return;
  //if (!e || !e.target) return;
  const target = e.target as HTMLInputElement;
  props.context.node.input(target.value);
};

onMounted(() => {});
</script>

<template>
  <label class="formkit-prefix-icon formkit-icon" for="input_1"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        d="M9.73,16c-2.82,0-5.12-2.29-5.12-5.12,0-1.9,1.04-3.63,2.72-4.52,.24-.13,.55-.04,.68,.21,.13,.24,.04,.55-.21,.68-1.35,.72-2.19,2.11-2.19,3.64,0,2.27,1.85,4.12,4.12,4.12s4.12-1.85,4.12-4.12c0-.83-.25-1.63-.71-2.31-.16-.23-.1-.54,.13-.69,.23-.16,.54-.1,.69,.13,.58,.85,.89,1.85,.89,2.88,0,2.82-2.29,5.12-5.12,5.12Z"
        fill="currentColor"
      ></path>
      <path
        d="M11.5,14h-3.55c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h3.55c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M10.09,12h-2.13c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h2.13c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M8.67,13.87c-.28,0-.5-.22-.5-.5v-3.46c0-.77,.43-1.45,1.11-1.8,.25-.12,.55-.02,.67,.22,.12,.25,.02,.55-.22,.67-.34,.17-.56,.52-.56,.9v3.46c0,.28-.22,.5-.5,.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M11.32,9.37c-2.58,0-4.68-2.1-4.68-4.68S8.74,0,11.32,0s4.68,2.1,4.68,4.68-2.1,4.68-4.68,4.68Zm0-8.37c-2.03,0-3.68,1.65-3.68,3.68s1.65,3.68,3.68,3.68,3.68-1.65,3.68-3.68-1.65-3.68-3.68-3.68Z"
        fill="currentColor"
      ></path>
      <path
        d="M11.25,7.43c-.97,0-1.75-.79-1.75-1.75V3.68c0-.97,.79-1.75,1.75-1.75s1.75,.79,1.75,1.75c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v2c0,.41,.34,.75,.75,.75s.75-.34,.75-.75c0-.28,.22-.5,.5-.5s.5,.22,.5,.5c0,.97-.79,1.75-1.75,1.75Z"
        fill="currentColor"
      ></path>
      <path
        d="M11,4.46h-1.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h1.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M11,6h-1.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h1.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M5.4,13.4c-2.98,0-5.4-2.42-5.4-5.4S2.42,2.6,5.4,2.6c.72,0,1.41,.14,2.07,.41,.26,.11,.38,.4,.27,.65-.11,.26-.4,.38-.65,.27-.53-.22-1.1-.33-1.68-.33-2.43,0-4.4,1.98-4.4,4.4s1.98,4.4,4.4,4.4c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M5.47,9.5c-.28,0-.5-.22-.5-.5V4.85c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4.15c0,.28-.22,.5-.5,.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M5.3,8.5c-.95,0-1.73-.77-1.73-1.73s.77-1.73,1.73-1.73h.35c.95,0,1.73,.77,1.73,1.73v.18c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-.18c0-.4-.33-.73-.73-.73h-.35c-.4,0-.73,.33-.73,.73s.33,.73,.73,.73c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M5,10.92s-.08,0-.12-.02c-.77-.19-1.31-.88-1.31-1.67v-.18c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v.18c0,.33,.23,.62,.55,.7,.27,.07,.43,.34,.36,.61-.06,.23-.26,.38-.48,.38Z"
        fill="currentColor"
      ></path>
    </svg>
  </label>
  <IMaskComponent
    v-model="numberModel"
    :mask="Number"
    radix="."
    :thousandsSeparator="','"
    @accept:masked="data.onAccept"
    @accept:unmasked="data.onAcceptUnmasked"
    @input="handleInput"
    class="formkit-input"
    type="text"
  />
</template>

<style lang="scss">
.d-none {
  display: none !important;
}
.d-block {
  display: block;
}
</style>
