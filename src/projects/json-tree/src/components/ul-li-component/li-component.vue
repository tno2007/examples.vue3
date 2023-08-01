<script setup lang="ts">
import { useSlots } from "vue";
import UlComponent from "./ul-component.vue";
import { type PropType } from "vue";
import type { IListLevelStyle } from "./typings";
import { getListLevelStyle } from "./common";

const slots = useSlots();

const props = defineProps({
  item: {
    type: Object as PropType<any>,
  },
  level: {
    type: Number,
    default: 1,
  },
  style: {
    type: String,
  },
  listLevelStyles: {
    type: Object as PropType<IListLevelStyle[]>,
    default: [],
  },
});

const getStyle = (level: number, element: "ul" | "li") =>
  getListLevelStyle(props.listLevelStyles, level, element);
</script>

<template>
  <li :class="getStyle(props.level, 'li')">
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
      <ul-component
        :items="item.children"
        :level="level + 1"
        :list-level-styles="listLevelStyles"
      >
        <template v-for="(_, slot) of $slots" v-slot:[slot]="props">
          <slot :name="slot" v-bind="props" />
        </template>
      </ul-component>
    </template>
  </li>
</template>
