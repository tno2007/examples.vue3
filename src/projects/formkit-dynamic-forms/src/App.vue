<script setup lang="ts">
import { reactive, ref } from "vue";
import { FormKitSchema } from "@formkit/vue";

const refModel = ref({});

const schema = reactive([
  {
    $formkit: "text",
    name: "a",
    label: "First name (as seen in passport)",
    id: "",
  },
  {
    $formkit: "text",
    name: "b",
    label: "Middle name",
  },
  {
    $formkit: "group",
    name: "c",
    repeatable: true,
    children: [
      {
        $formkit: "text",
        name: "b",
        label: "Middle name",
      },
    ],
  },
]);

const handleSubmit = () => alert("Valid submit!");

//onMounted(() => {});
</script>

<template>
  <div>
    <!--
      :x
    -->

    <FormKit type="form" v-model="refModel" @submit="handleSubmit">
      <FormKitSchema :schema="schema" />
    </FormKit>
    <pre>{{ refModel }}</pre>

    <!--
    <FormKit type="form">
      <FormKit
        type="email"
        name="email"
        label="Email address"
        help="What is your email address?"
        placeholder="jon@foo.com"
        validation="required|email|length:16,9"
        validation-visibility="live"
        v-model="model2"
      />
    </FormKit>
  --></div>

  <!--
  <pre>{{ model2 }}</pre>
  <h1 v-if="refModel.hasEmail">{{ refModel.name }}</h1>
  -->
</template>

<style lang="scss"></style>
