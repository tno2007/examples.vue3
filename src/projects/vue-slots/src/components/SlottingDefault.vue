<script setup>
import { onMounted, reactive, ref, watch } from "vue";
const greetingMessage = ref("greetings");

</script>

<template>
  <div>
    <!--
      These slots props are just passed in.
      Its the parent that decides where the props are being unserted (template)
    -->
    <slot :text="greetingMessage" :count="1">Slot default</slot>
  </div>
</template>