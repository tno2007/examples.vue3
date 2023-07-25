<script setup lang="ts">
import { ref, type PropType, useSlots } from "vue";
import { type IListItem } from "./typings";

const props = defineProps({
  item: {
    type: Object as PropType<IListItem>,
  },
  level: {
    type: Number,
    default: 0,
  },
});

const level = ref(0);

level.value = props.level;

const slots = useSlots();
</script>

<template>
  <template v-for="(_, slot) in $slots" :key="slot">
    <template v-if="slot === `level${level}`">
      <slot :name="slot">default value C</slot>
    </template>
  </template>

  <template v-if="Object.keys(slots).includes(`level${level}`) === false">
    <span>{{ props.item?.name }} ({{ level }})</span>
  </template>
</template>

<!--
  <template v-for="(_, slot) in $slots" :key="slot">
    <pre>...{{ slot }} </pre>
    <slot :name="slot">default value C</slot>
    <br /><br />
  </template>

    <template v-for="(_, slot) in $slots" :key="slot">
    <template v-if="slot === `level${props.level}`"> </template>
    <span>...{{ `level${props.level}` }}...</span>
  </template>
</template>

<slot :name="slot" v-if="slot === `level${level}`">default value C</slot>
  -->
