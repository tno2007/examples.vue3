<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

const items = ref([{}]);
</script>

<template>
  <!-- repeater -->
  <FormKit
    id="repeater"
    name="users"
    type="repeater"
    label="Users"
    draggable="true"
    #default="{ index }"
  >
    <FormKit
      type="text"
      :label="`${index + 1}. Name`"
      name="name"
      validation="required"
    />

    <FormKit
      type="email"
      :label="`${index + 1}. Email`"
      name="email2"
      validation="required|email"
      placeholder="Add email address..."
    />
  </FormKit>

  <!--  -->
  <FormKit type="list" :value="['']" dynamic #default="{ items, node, value }">
    <FormKit
      v-for="(item, index) in items"
      :key="item"
      :index="index"
      label="Guest name"
      placeholder="Guest name"
      suffix-icon="trash"
      @suffix-icon-click="() => node.input(value.filter((_ : any, i: number) => i !== index))"
      :sections-schema="{
        suffixIcon: {
          // change wrapper to a button for accessibility
          $el: 'button',
        },
      }"
    />

    <FormKit type="button" @click="() => node.input(value.concat(''))">
      + Add another
    </FormKit>
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style lang="scss">
.formkit-suffix-icon {
  appearance: none;
  background: none;
  border: none;
  font-size: 1em;
}
</style>
