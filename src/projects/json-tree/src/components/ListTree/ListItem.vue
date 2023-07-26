<script setup lang="ts">
import { ref, type PropType, useSlots } from "vue";
import { type IListItem } from "./typings";
import { reactive } from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<IListItem>,
  },
  level: {
    type: Number,
    default: 0,
  },
  test: {
    type: String,
    default: "pes2013",
  },
});

const level = ref(0);

level.value = props.level;

const slots = useSlots();

const var1 = props.test;
const label = props.item?.name;

const data = reactive({
  label: props.item?.name,
});

/*
const data = ref({

})
*/
</script>

<template>
  <!--
  <slot name="gimme" :slotVariable1="var1" :slotVariable2="label">
    <h2>Default template</h2>
    <pre>{{ var1 }}</pre>
  </slot>

  -->

  <!--  -->
  <template v-for="(_, slot) in $slots" :key="slot">
    <template v-if="slot === `level${level}`">
      <slot :name="slot" :slotData="data.label">
        <span>{{ data.label }}</span>
      </slot>
    </template>
  </template>

  <template v-if="Object.keys(slots).includes(`level${level}`) === false">
    <span>{{ data.label }}</span>
  </template>
</template>

<!--
  <template v-for="(_, slot) in $slots" :key="slot">
    <pre>...{{ slot }} </pre>
    <slot :name="slot">default value C</slot>
    <br /><br />
  </template>

    <template v-for="(_, slot) in $slots" :key="slot">
    <template v-if="slot === `level${props.level}`"> </template>
    <span>...{{ `level${props.level}` }}...</span>
  </template>
</template>

<slot :name="slot" v-if="slot === `level${level}`">default value C</slot>
  -->
