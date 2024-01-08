<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { FormKitSchema } from "@formkit/vue";

const refModel = ref({});

const reactiveModel = reactive({
  hasEmail: undefined,
  name: "",
  name1: "",
});

const model2 = ref("");

const schema = reactive([
  {
    $formkit: "text",
    name: "a",
    label: "First name (as seen in passport)",
  },
  {
    $formkit: "text",
    name: "b",
    label: "Middle name",
  },
  {
    $formkit: "text",
    name: "c",
    label: "Last name:",
  },
  {
    $formkit: "text",
    name: "d",
    label: "Passport number:",
  },
  {
    $formkit: "text",
    name: "e",
    label: "Passport expiry date:",
  },
  {
    $formkit: "text",
    name: "f",
    label: "Date of birth:",
  },
  {
    $formkit: "radio",
    name: "g",
    label: "Gender:",
    options: [
      {
        value: 1,
        label: "Male",
      },
      {
        value: 2,
        label: "Female",
      },
    ],
  },
  {
    $formkit: "radio",
    name: "h",
    id: "h",
    label: "Do you have a criminal record?",
    options: [
      {
        value: true,
        label: "Yes",
      },
      {
        value: false,
        label: "No",
      },
    ],
  },
  {
    $formkit: "textarea",
    name: "i",
    label: "Please provide more detail:",
    if: "$get(h).value",
  },
  {
    $formkit: "radio",
    name: "j",
    id: "j",
    label: "Please indicate your marital status:",
    options: [
      {
        value: 1,
        label: "Married",
      },
      {
        value: 2,
        label: "Single",
      },
      {
        value: 3,
        label: "Civil partner",
      },
      {
        value: 4,
        label: "Unmarried partner",
      },
      {
        value: 5,
        label: "Divorced",
      },
      {
        value: 7,
        label: "Widowed",
      },
    ],
  },
  // ************************************
  /*
  {
    $formkit: "checkbox",
    name: "e",
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
  {
    $formkit: "text",
    name: "email2",
    label: "Email 2",
    if: "$get(name).value === 'a'",
  },
  */
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

//onMounted(() => {});
</script>

<template>
  <div>
    <!--
      :x
    -->

    <FormKit
      type="form"
      v-model="refModel"
      @submit="handleSubmit"
      form-class="selection:bg-pink-200 my-8 mx-auto w-full max-w-2xl bg-white border-2 border-green-400 p-6 shadow-lg rounded-lg"
    >
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
