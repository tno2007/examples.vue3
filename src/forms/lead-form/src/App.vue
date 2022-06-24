<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import autoAnimate from "@formkit/auto-animate";

const formContainer = ref();
const fieldset = ref();

const register = () => {};

const data = reactive({
  checked: false,
});

onMounted(() => {
  formContainer.value.querySelectorAll(".formkit-outer").forEach(autoAnimate);

  autoAnimate(formContainer.value);
  autoAnimate(fieldset.value);
});

const formData = ref({});
const formSchema = [
  {
    $formkit: "text",
    name: "firstname",
    label: "First name(s):",
    validation: "required",
    validationMessages: {
      required: "We need this information to assist you",
    },
  },
  {
    $formkit: "text",
    name: "lastname",
    label: "Last name:",
    validation: "required",
    validationMessages: {
      required: "We need this information to assist you",
    },
  },
  {
    $formkit: "text",
    name: "email",
    label: "Email address:",
    validation: "required|email",
    validationMessages: {
      required: "We need this information to assist you",
    },
  },
  {
    $formkit: "checkbox",
    name: "eu_citizen",
    id: "eu",
    label: "Are you a european citizen?",
  },
  {
    $formkit: "select",
    if: "$get(eu).value", // 👀 Oooo, conditionals!
    name: "cookie_notice",
    label: "Cookie notice frequency",
    options: {
      refresh: "Every page load",
      hourly: "Ever hour",
      daily: "Every day",
    },
    help: "How often should we display a cookie notice?",
  },
];
</script>

<template>
  <div ref="formContainer">
    <FormKit type="form" v-model="formData" @submit="register">
      <FormKitSchema :schema="formSchema" />
    </FormKit>
  </div>

  <div ref="fieldset">
    <input type="checkbox" v-model="data.checked" class="d-block" />
    <input v-if="data.checked" type="text" name="" id="" />
  </div>
</template>

<style></style>
