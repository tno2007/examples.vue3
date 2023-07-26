<script setup lang="ts">
// import VueTree from "./components/VueTree.vue";
// import Vue3TreeVue from "./components/Vue3TreeVue.vue";
import VueTwoExample from "./components/VueTwoExample/VueTwoExample.vue";
import SimpleSlot from "./components/SimpleSlot/SimpleSlot.vue";
import Sample from "./components/ListTree/Sample.vue";
import { ref } from "vue";


const opened = ref(false)
</script>

<template>

  <div>
    <button @click="opened = !opened">Toggle</button>

    <div
    :class="[{'-translate-x-full': opened }]"
      class="fixed top-20 left-0 z-40 w-64 h-screen transition-transform --sm:translate-x-0"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <Sample />
      </div>
    </div>


  <div>
  <p>
    <h2>todo</h2>
  </p>    
  </div>

  </div>

</template>

<style></style>
