<script setup lang="ts">
import { type PropType, ref, useSlots, reactive } from "vue";
import ListItem from "./ListItem.vue";
import { type IListItem, type IListLevelStyle } from "./typings";

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

const propSettings = ref({});

const level = ref(0);
level.value = props.level;

//const slots = useSlots();

const levelItem = ref({});
levelItem.value = props.items[level.value - 1];

const levelStyle = (levelNumber: number, element: "ul" | "li") => {
  // const r = Math.random();

  // console.log(levelNumber, element);

  let style = props.listLevelStyles[levelNumber - 1];

  //console.log(levelNumber, element, props.listLevelStyles);

  if (!style) return;

  // console.log(levelNumber, style);

  return style[element] || "";
};

const label = ref(null);
</script>

<template>
  <ul :class="levelStyle(level, 'ul')">
    <li
      :class="levelStyle(level, 'li')"
      v-for="(item, i) in props.items"
      :key="i"
    >
      <ListItem :item="item" :level="level">
        <template #level1>
          <slot name="level1" :label="item.name"></slot>
        </template>
        <template #level2>
          <slot name="level2" :label="item.name"></slot>
        </template>

        <!--
        <template v-for="(_, slot) in $slots" :key="slot" #[slot]="slotData">
          <slot :name="slot" :data="slotData" />
        </template>
        -->
      </ListItem>
      <template v-if="item.children && item.children.length > 0">
        <List
          :items="item.children"
          :level="level + 1"
          :list-level-styles="props.listLevelStyles"
        >
          <!--
                    <template v-for="(_, slot) in $slots" :key="slot" #[slot]>
            <slot :name="slot" />
          </template>
        -->
        </List>
      </template>
    </li>
  </ul>
</template>

<!--
  <ListItem :test="props.test">

    <br comm='
      www is just a placeholder name

      All you are saying is where in this template, 
      this placeholder variable should manifest in the real slot
      you are targeting.

      This slotProp below contains all the exposed slot variables.
      
      If you want to make use of these variables, 
      you have to target them using the www.propertyName syntax 
    '>

     <template #gimme="www">
      <slot name="gimme" :slotVariable1="var1">
        <h2>Middle template</h2>
        <pre>{{ www.slotVariable1 }}</pre>
      </slot>
    </template>
  </ListItem>
  -->
