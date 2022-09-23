<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { FormKitSchema } from "@formkit/vue";

const refModel = ref({
  hasEmail: false,
  name: "",
  name1: "",
});

const reactiveModel = reactive({
  hasEmail: undefined,
  name: "",
  name1: "",
});

const model2 = ref("");

const schema = reactive([
  {
    $formkit: "text",
    name: "name",
    label: "Full Name",
    placeholder: "Enter your name...",
  },
  {
    $formkit: "text",
    name: "name1",
    label: "Full Name",
    placeholder: "Enter your name...",
  },
  {
    $formkit: "checkbox",
    name: "hasEmail",
    id: "hasMail",
    label: "Has Email?",
  },

  {
    $el: "p",
    children: ["Email enabled? ", "$get(hasMail).value"],
  },

  {
    $formkit: "text",
    name: "email",
    label: "Email",
    if: "$get(hasMail).value",
    validation: "required|email",
  },
  /*
  {
    $formkit: "otp",
    name: "two_factor_code",
    label: "One-time password:",
  },
  {
    $formkit: "repeatableGroup",
    name: "repeat-me-1",
    label: "Dependents:",
  },
  */
  /*
  {
    $formkit: "group",
    name: "repeat-me-2",
    label: "Dependents:",
    children: [
      {
        $formkit: "text",
        name: "name1",
        label: "Child First name",
        placeholder: "Enter your name...",
      },
      {
        $formkit: "text",
        name: "name2",
        label: "Child  Last name",
        placeholder: "Enter your name...",
      },
    ],
  },
  */
]);

const handleSubmit = () => alert("Valid submit!");

onMounted(() => {});
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
  </div>
  <pre>{{ model2 }}</pre>
  <h1 v-if="refModel.hasEmail">{{ refModel.name }}</h1>
</template>

<style lang="scss"></style>
