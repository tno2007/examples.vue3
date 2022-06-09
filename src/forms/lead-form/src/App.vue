<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

const data = ref({});

const schema = [
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
  <FormKit type="form" v-model="data" @submit="register">
    <FormKitSchema :schema="schema" />
  </FormKit>
</template>

<style></style>
