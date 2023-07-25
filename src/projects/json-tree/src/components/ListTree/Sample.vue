<script setup lang="ts">
import { ref, type PropType } from "vue";
import List from "./List.vue";
import { type IListItem } from "./typings";

import { useAppStore } from "../../stores/app";

const store = useAppStore();

/*
# TODO
- add scoped slots. The final piece of the puzzle!
- add a sample multilevel styling
- I can let Ashley know perhaps by now
- For later: how will I handle the click events? collapse and expand?
*/
</script>

<template>
  <List :items="store.tree">
    <template #level1> Passed from parent L1 </template>
    <template #level2> Passed from parent L2 </template>
    <template #level3> Passed from parent L3 </template>
  </List>
</template>
