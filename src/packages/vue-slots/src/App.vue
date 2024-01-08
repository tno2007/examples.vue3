<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import ExampleComponent from "./components/ExampleComponent.vue"
import SlottingDefault from "./components/SlottingDefault.vue"
import SlottingNamed from "./components/SlottingNamed.vue"

const data = reactive({
  defaultSlotName: "default",
  headerSlotName: "header",
  header: "--header--",
  body: "--body--",
  footer: "--footer--",
});

const a = 1;

onMounted(() => {
  
});
</script>

<template>
  
  <span>Default slot name:</span>
  <br />
  <input v-model="data.defaultSlotName" />
  <br />
  <span>Header slot name:</span>
  <br />  
  <input v-model="data.headerSlotName" />
  <br />
  <br />
  <input v-model="data.header" />
  
  <input v-model="data.body" />
  
  <input v-model="data.footer" />
  
  <pre>{{ data }}</pre>
  <br/>
  
  <form>
    <fieldset>
      <legend>Default slot</legend>
      <SlottingDefault>      
        <template #[data.defaultSlotName]="{ text, count }">        
          <h3>{{ text }}</h3>       
          <span>---</span> 
          <h3>{{ count }}</h3>
        </template>
      </SlottingDefault>      
    </fieldset>
  </form>
  
  
  <form>
    <fieldset>
      <legend>Named slot</legend>
      <SlottingNamed>      
        <template #header="{ text, count }">        
          <h3>{{ text }}</h3>       
          <span>---</span> 
          <h3>{{ count }}</h3>
        </template>
      </SlottingNamed>      
    </fieldset>
  </form>
  
</template>

<style lang="scss"></style>
