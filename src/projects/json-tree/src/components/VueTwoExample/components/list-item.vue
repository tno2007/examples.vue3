<script setup lang="ts">
import { computed, reactive } from "vue";

const props = defineProps({
  item: Object,
});

const data = reactive({
  isOpen: false,
});

const isFolder = computed(() => {
  return props.item?.children && props.item.children.length;
});

const toggle = () => {
  if (isFolder) {
    data.isOpen = !data.isOpen;
  }
};
const makeFolder = () => {
  if (!isFolder) {
    // this.$emit("make-folder", props.item);
    // data.isOpen = true;
  }
};
</script>

<template>
  <div class="list-item-content" :class="props.item.class">
    <slot>{{ props.item?.name }}</slot>
  </div>
</template>

<!-- 
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="makeFolder">
      {{ props.item?.name }}
      <span v-if="isFolder">[{{ data.isOpen ? "-" : "+" }}]</span>
    </div>
    <ul v-show="data.isOpen" v-if="isFolder">
      <tree-item
        class="item"
        v-for="(child, index) in props.item?.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      ></tree-item>
    </ul>
  </li>    
  -->
