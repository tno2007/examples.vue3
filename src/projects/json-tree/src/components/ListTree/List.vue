<script setup lang="ts">
import { type PropType, ref, useSlots } from "vue";
import ListItem from "./ListItem.vue";
import { type IListItem } from "./typings";

const props = defineProps({
  items: {
    type: Object as PropType<IListItem[]>,
  },
  level: {
    type: Number,
    default: 1,
  },
  ulClass: {
    type: String,
    default: null,
  },
  liClass: {
    type: String,
    default: null,
  },
});

const level = ref(0);

const slots = useSlots();

level.value = props.level;
</script>

<template>
  <ul :class="props.ulClass">
    <li :class="props.liClass" v-for="(item, i) in props.items" :key="i">
      <ListItem :item="item" :level="level">
        <template v-for="(_, slot) in $slots" :key="slot" #[slot]>
          <slot :name="slot">default value B</slot>
        </template>
      </ListItem>
      <template v-if="item.children && item.children.length > 0">
        <List
          :ul-class="props.ulClass"
          :li-class="props.liClass"
          :items="item.children"
          :level="level + 1"
        >
          <template v-for="(_, slot) in $slots" :key="slot" #[slot]>
            <slot :name="slot">default value B</slot>
          </template>
        </List>
      </template>
    </li>
  </ul>
</template>
