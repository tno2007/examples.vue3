<script setup lang="ts">
import { useSlots, type PropType, ref } from "vue";
import { type IListItem, type IListLevelStyle } from "./typings";
import LiComponent from "./LiComponent.vue";

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
  test: {
    type: String,
    default: "pes2013",
  },
});

const listLevel = ref(0);
listLevel.value = props.level;

const levelStyle = (levelNumber: number, element: "ul" | "li") => {
  let style = props.listLevelStyles[levelNumber - 1];
  if (!style) return;
  return style[element] || "";
};
</script>

<template>
  <ul :class="levelStyle(level, 'ul')">
    <LiComponent v-for="i in items" :item="i" :level="listLevel">
      <template v-for="(_, slot) in $slots" :key="slot" #[slot]="props">
        <slot :name="slot" v-bind="props" />
      </template>
    </LiComponent>
  </ul>
</template>
