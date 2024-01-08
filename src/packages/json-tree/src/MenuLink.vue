<script setup lang="ts">
const props = defineProps({
  expanded: {
    type: Boolean,
  },
  hasChildren: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  label: {
    type: String,
    default: "Link",
  },
  level: {
    type: Number,
  },
});
</script>

<template>
  <template v-if="props.hasChildren">
    <button type="button"
      class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages" aria-expanded="true">
      <font-awesome-icon v-if="props.icon" :icon="['fas', props.icon]" size="lg" />

      <font-awesome-icon v-if="props.level && props.level > 1" :icon="['fas', 'circle']" size="lg" class="invisible" />

      <span class="flex-1 ml-3 text-left whitespace-nowrap">{{
        props.label
      }}</span>
      <svg aria-hidden="true" class="w-6 h-6 transition-transform" :class="{ '-rotate-180': props.expanded }"
        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </template>
  <template v-else>
    <a
      class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <font-awesome-icon v-if="props.icon" :icon="['fas', props.icon]" size="lg" />

      <font-awesome-icon v-if="props.level && props.level > 1" :icon="['fas', 'circle']" size="lg" class="invisible" />

      <slot><a href="#" class="ml-3 hover:bg-gray-100">{{ props.label }}</a></slot>

    </a>
  </template>
</template>
