<script setup lang="ts">
import { ref, type PropType } from "vue";
import { type IListItem } from "./typings";

import List from "./list.vue";
import ListItem from "./list-item.vue";
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array as PropType<IListItem[]>,
    required: true,
    default: () => {
      return [];
    },
  },
  listLevel: {
    type: Number,
    default: 1,
  },
  parentIndex: {
    type: Number,
    required: false,
  },
});

//const uniqueId = (value: number) => `id${count.value++}`;

const uniqueId = (index: number, parentIndex?: number) => `${index}`;

const treeItems = computed(() => props.items);
</script>

<template>
  <ul class="list">
    <li
      class="list-item"
      v-for="(item, index) in treeItems"
      :key="item.id"
      :data-index="item.id || uniqueId(index)"
      :data-parent-index="parentIndex"
    >
      <list-item :item="item" :level="props.listLevel">
        <template v-for="(_, slot) in $slots">
          <template :slot="slot">
            <slot :name="slot"></slot>
          </template>
        </template>
      </list-item>
      <div class="children" v-if="item.children && item.children.length > 0">
        <list
          :items="item.children"
          :parentIndex="index"
          :list-level="1 + props.listLevel"
        ></list>
      </div>
    </li>
  </ul>
</template>

<!-- https://stackoverflow.com/questions/53430731/vuejs-nested-slots-how-to-pass-slot-to-grandchild -->
