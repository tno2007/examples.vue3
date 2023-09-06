<script setup lang="ts">
import type { FormKitSchemaCondition, FormKitSchemaNode } from "@formkit/core";
import { reactive, ref } from "vue";

const data = reactive({
  model: {},
  plugins: [],
  stringify: (value: any) => JSON.stringify(value, null, 2),
});

// const model = ref({});

const schema = ref([
  {
    $el: "h1",
    children: "Carbon Sequestration Grant",
  },
  {
    $formkit: "multi-step",
    tabStyle: "progress",
    allowIncomplete: false,
    children: [
      {
        $formkit: "step",
        name: "one",
        children: [
          {
            $formkit: "text",
            label: "Name",
            prefixIcon: "avatarMan",
            //validation: "required",
          },
          {
            $formkit: "radio",
            id: "enableStep2",
            name: "enableStep2",
            label: "Enable Step 2",
            options: [
              {
                value: 2,
                label: "Show two",
              },
              {
                value: 3,
                label: "Show three",
              },
            ],
          },
          {
            $el: "div",
            children: "$stringify($get(enableStep2).value)",
          },
        ],
      },
      {
        $formkit: "step",
        name: "two",
        children: [
          {
            $formkit: "text",
            label: "Surname",
          },
        ],
        if: "$get(enableStep2).value === 2",
      },
      {
        $formkit: "step",
        name: "three",
        children: [
          {
            $formkit: "number",
            label: "Age",
          },
        ],
        if: "$get(enableStep2).value === 3",
      },
      {
        $formkit: "step",
        name: "four",
        children: [
          {
            $formkit: "select",
            label: "Country of birth",
            options: [
              {
                label: "-- Select --",
              },
              {
                value: 1,
                label: "Eenie",
              },
              {
                value: 2,
                label: "Meenie",
              },
              {
                value: 3,
                label: "Miny",
              },
              {
                value: 4,
                label: "Mo",
              },
            ],
          },
        ],
      },
    ],
  },
]);
</script>

<template>
  <FormKit type="form" v-model="data.model">
    <FormKitSchema :schema="schema" :data="data" />
  </FormKit>

  <pre>{{ data.model }}</pre>
</template>

<style></style>
