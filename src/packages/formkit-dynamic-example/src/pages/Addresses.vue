<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { reactive, ref } from "vue";
import { FormKitSchema } from "@formkit/vue";
import {} from "@formkit/pro";
import collections from "../../data/collections";
import type { FormKitSchemaNode } from "@formkit/core/dist/index";

const model = ref({
  firstname: "Joe",
  addresses: [],
});

const schema = ref([
  {
    $formkit: "text",
    name: "firstname",
    label: "First name",
  },
  {
    $formkit: "repeater",
    id: "addresses",
    name: "addresses",
    label: "Please provide all your addresses for the past 5 years",
    children: [
      {
        $formkit: "text",
        name: "NName",
        label: "First name",
      },
    ],
  },
]);

const handleSubmit = () => alert("Valid submit!");
</script>

<template>
  <div>
    <FormKit
      type="form"
      v-model="model"
      @submit="handleSubmit"
      form-class="selection:bg-pink-200 my-8 mx-auto w-full max-w-2xl bg-white border-2 border-green-400 p-6 shadow-lg rounded-lg"
    >
      <FormKitSchema :schema="schema" />
    </FormKit>

    <h3># Model</h3>
    <pre>{{ model }}</pre>
  </div>
</template>

<style lang="scss"></style>
