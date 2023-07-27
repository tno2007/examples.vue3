<script setup lang="ts">
import { useSlots } from "vue";
import UlComponent from "./UlComponent.vue";
import { type PropType } from "vue";

const slots = useSlots();

const props = defineProps({
  item: {
    type: Object as PropType<any>,
  },
  level: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <li>
    <template v-for="(_, slot) in $slots" :key="slot">
      <template v-if="slot === `level${level}`">
        <slot :name="slot" :label="item.name">
          <strong>{{ item.name }}</strong>
        </slot>
      </template>
    </template>

    <template v-if="Object.keys(slots).includes(`level${level}`) === false">
      <span>{{ item.name }}</span>
    </template>

    <template v-if="item.children && item.children.length > 0">
      <UlComponent :items="item.children" :level="level + 1">
        <template v-for="(_, slot) of $slots" v-slot:[slot]="props">
          <slot :name="slot" v-bind="props" />
        </template>
      </UlComponent>
    </template>
  </li>
</template>
