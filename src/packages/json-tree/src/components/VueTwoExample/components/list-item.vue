<script setup lang="ts">
import { computed, reactive, type PropType, ref } from "vue";
import { type IListItem } from "./typings";

interface IProps {
  class: string;
  name: string;
  children: any;
}

const props = defineProps({
  level: Number,
  item: {
    type: Object as PropType<IListItem>,
  },
});

const data = reactive({
  isOpen: false,
  item: props.item,
  level: props.level,
});

const dataX = ref({
  isOpen: false,
  item: props.item,
  level: props.level,
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

const slotName = computed(() => `level${data.level}`);
</script>

<template>
  <slot :name="slotName" :v-bind="data">
    <span>[default] {{ data.item?.name }} [{{ slotName }}]</span>
  </slot>
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
