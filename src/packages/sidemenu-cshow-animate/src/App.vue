<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import SlideUpDown from 'vue-slide-up-down';

const message = ref<string>("");

onMounted(() => {
  message.value = "Vue";
});

const items = [
  {
    "name": "Home"
  },
  {
    "name": "Level 1",
    "children": [
      {
        "name": "Level 2.1"
      },
      {
        "name": "Level 2.2"
      }
    ]
  },
];

const levelExpanded = ref(false);

</script>

<template>
  <pre>Hello, {{ message }}</pre>


  <ul v-auto-animate>
    <li>Home</li>
    <div>
      <ul>
        <li @click="levelExpanded = !levelExpanded">Level 1</li>
        <slide-up-down :active="levelExpanded">
          <ul>
            <li>Level 2.1</li>
            <li>Level 2.2</li>
          </ul>
        </slide-up-down>
        <li>Another level</li>
      </ul>
    </div>

  </ul>
</template>

<style lang="scss">
ul {
  cursor: pointer;
}

/* we will explain what these classes do next! */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
