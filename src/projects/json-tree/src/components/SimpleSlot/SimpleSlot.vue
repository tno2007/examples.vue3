<script setup lang="ts">
import SimpleSlotSub from "./SimpleSlotSub.vue";
</script>

<template>
  <!--
  <SimpleSlotSub :index="2">
    <template #level1>
      <slot name="level1">mid level content</slot>
    </template>
  </SimpleSlotSub>
  -->

  <SimpleSlotSub>
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </SimpleSlotSub>
</template>
