<script setup lang="ts">
import { type PropType, ref } from "vue";
import { type IListItem, type IListLevelStyle } from "./typings";
import { getListLevelStyle } from "./common";
import LiComponent from "./li-component.vue";

const props = defineProps({
  items: {
    type: Object as PropType<IListItem[]>,
    default: [],
  },
  level: {
    type: Number,
    default: 1,
  },
  listLevelStyles: {
    type: Object as PropType<IListLevelStyle[]>,
    default: [],
  },
});

console.log(props.level);

const getStyle = (level: number, element: "ul" | "li") =>
  getListLevelStyle(props.listLevelStyles, level, element);
</script>

<template>
  <ul :class="getStyle(props.level, 'ul')">
    <li-component
      v-for="i in items"
      :item="i"
      :level="props.level"
      :list-level-styles="props.listLevelStyles"
    >
      <template v-for="(_, slot) in $slots" :key="slot" #[slot]="props">
        <slot :name="slot" v-bind="props" />
      </template>
    </li-component>
  </ul>
</template>
