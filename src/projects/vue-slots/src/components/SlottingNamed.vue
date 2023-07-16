<script setup>
import { onMounted, reactive, ref, watch } from "vue";
const greetingMessage = ref("hello");

</script>

<template>
    <div>
      <slot name="header" :text="greetingMessage" :count="2">Fallback header</slot>
    </div>
    
    <div>
      <slot>Fallback body</slot>
    </div>
    
    <div>
      <slot name="footer">Fallback footer</slot>
    </div>
</template>