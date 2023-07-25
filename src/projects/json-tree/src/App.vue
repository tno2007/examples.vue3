<script setup lang="ts">
// import VueTree from "./components/VueTree.vue";
// import Vue3TreeVue from "./components/Vue3TreeVue.vue";
import VueTwoExample from "./components/VueTwoExample/VueTwoExample.vue";
import SimpleSlot from "./components/SimpleSlot/SimpleSlot.vue";
</script>

<template>
  <!--
  <h1>Vue3TreeVue</h1>
  <Vue3TreeVue></Vue3TreeVue>
  <hr />
  -->

  <VueTwoExample />

  <br />
  <hr />
  <br />

  <h1>SimpleSlot</h1>
  <SimpleSlot>
    <template #level-1>top level content - example L1</template>
    <template #level-2>top level content - example L2</template>
    <template #level-3>top level content - example L3</template>
  </SimpleSlot>
</template>

<style>
.red {
  color: red;
}

.blue {
  color: blue;
}

.green {
  color: green;
}
</style>
