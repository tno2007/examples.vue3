<script setup lang="ts">
import { type PropType, ref } from "vue";
import { type IListItem, type IListLevelStyle } from "./typings";
import { getListLevelStyle } from "./common";
import LiComponent from "./li-component.vue";
import { onMounted } from "vue";

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

const getStyle = (level: number, element: "ul" | "li") =>
  getListLevelStyle(props.listLevelStyles, level, element);

const parsed = props.items.map((i) => {
  return {
    ...i,
    // where expanded is not specified, provide a default
    expanded: i.expanded || false,
  };
});
</script>

<template>
  <ul :class="getStyle(props.level, 'ul')">
    <LiComponent
      v-for="i in props.items"
      :item="i"
      :level="props.level"
      :list-level-styles="props.listLevelStyles"
    >
      <template v-for="(_, slot) in $slots" :key="slot" #[slot]="props">
        <slot :name="slot" v-bind="props" />
      </template>
    </LiComponent>
  </ul>
</template>
