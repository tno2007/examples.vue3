<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import { FormKitSchema } from "@formkit/vue";
import {} from "@formkit/pro";
import collections from "../../data/collections";
import type { FormKitSchemaNode } from "@formkit/core/dist/index";

const model = ref({
  firstname: "Joe",
  lastname: "Bloggs",
  dateofbirth: "1978-12-31T22:00:00.000Z",
  new_gender: 1,
  new_country: "5578",
  address1_line1: "224B Clarence street",
  address1_line2: "",
  address1_city: "Vogeltown",
  address1_stateorprovince: "Wellington",
  address1_postalcode: "6023",
});

const schema: FormKitSchemaNode[] = [
  {
    $formkit: "text",
    name: "firstname",
    label: "First name",
  },

  {
    $formkit: "text",
    name: "lastname",
    label: "Last name:",
  },
  {
    $formkit: "date",
    name: "dateofbirth",
    label: "Date of birth:",
  },
  {
    $formkit: "radio",
    name: "new_gender",
    label: "Sex:",
    options: collections.Gender,
  },
  {
    $formkit: "select",
    name: "new_country",
    label: "Country:",
    options: collections.Countries,
  },
  {
    $formkit: "text",
    name: "address1_line1",
    label: "Address line 1:",
  },
  {
    $formkit: "text",
    name: "address1_line2",
    label: "Address line 2:",
  },
  {
    $formkit: "text",
    name: "address1_city",
    label: "Post town/City:",
  },
  {
    $formkit: "text",
    name: "address1_stateorprovince",
    label: "State/province:",
  },
  {
    $formkit: "text",
    name: "address1_postalcode",
    label: "Postal code:",
  },
];

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
