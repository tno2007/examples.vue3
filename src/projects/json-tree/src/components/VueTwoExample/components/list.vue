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
});

const count = ref(0);
const uniqueId = () => `id${++count.value}`;

const treeItems = computed(() => props.items);
</script>

<template>
  <ul class="list">
    <li
      class="list-item"
      v-for="item in treeItems"
      :key="item.id"
      :id="item.id || uniqueId()"
    >
      <list-item :item="item"></list-item>
      <div class="child" v-if="item.children && item.children.length > 0">
        <list :items="item.children"></list>
      </div>
    </li>
  </ul>
</template>
