<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  level: {
    type: Number,
    default: 0,
  },
});

const slotName = computed(() => `level-${props.level}`);
</script>

<template>
  <!--
  <slot v-for="(_, slot) in $slots" :name="slotName">
    <div>...{{ slot }}</div>
  </slot>
  -->
  <!--  -->

  <pre>{{ slotName }}</pre>

  <template v-for="(_, name) in $slots">
    <slot :name="slotName">
      <div>... {{ name }} ...</div>
    </slot>
  </template>
</template>

<!--
      <ul>
    <li>
      <span>Level 1 - A</span>
      <ul>
        <li>
          <span>Level 2 - A</span>
          <ul>
            <li>
              <span>Level 3 - A</span>
              <ul>
                <li><span>Level 4 - A</span></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span> Level 2 - B </span>
        </li>
      </ul>
    </li>
    <li>
      <span>Level 2 - A</span>
      <ul>
        <li>Two - One</li>
        <li>Two - Two</li>
      </ul>
    </li>
  </ul>
-->
