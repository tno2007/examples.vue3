<script setup lang="ts">
import { ref } from "vue";
import SimpleTree from "./components/list.vue";
import { useAppStore } from "../../stores/app";

const store = useAppStore();

const a = store.tree;
</script>

<template>
  <!--
<ul id="demo"></ul>
  -->

  <SimpleTree :items="store.tree"> </SimpleTree>
  
  <!-- next up -->
  <SimpleTree :items="store.tree">
    <!-- level 1 -->
    <template #level1="{ name }">
      <div class="level-one-class">
        <i class="icon"></i>
        <h1>{{ name }}</h1>
      </div>     
    </template>
    <!-- level 2 -->
    <template #level2="{ name }">
      <div class="level-two-class">
        <h2>{{ name }}</h2>
      </div>     
    </template>
    <!-- level 3 -->
    <template #level3="{ name }">
      <div class="level-three-class">
        <h3>{{ name }}</h3>
      </div>     
    </template>
    <!-- level 4 -->
    <template #level4="{ name }">
      <div class="level-four-class">
        <h4>{{ name }}</h4>
      </div>     
    </template>            
  </SimpleTree>
  
</template>
