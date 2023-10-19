<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch, defineComponent } from "vue";


const context = reactive({
  //library: markRaw({
  //  GridBlock: GridBlock,
  //}),
  schema: []
})

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}


onMounted(() => {

});
</script>

<template>
  <div class="h-96">
    <vue-monaco-editor theme="vs-dark" :options="MONACO_EDITOR_OPTIONS" language="javascript" />
  </div>

  <!-- <FormKitSchema :schema="context.schema" :library="context.library"></FormKitSchema> -->
</template>

<style lang="scss"></style>
