<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import {
  FlowForm,
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LanguageModel,
} from "@ditdot-dev/vue-flow-form";

const data = reactive({
  questions: [
    new QuestionModel({
      id: "first_name",
      tagline: "Hi! Welcome to our demo survey 😊",
      title: "What is your first name?",
      type: QuestionType.Text,
      required: true,
      placeholder: "Start typing here...",
    }),
  ],
  language: "",
});

onMounted(() => {});
</script>

<template>
  <div>
    <flow-form :questions="data.questions" />
  </div>
</template>

<style lang="scss">
/* If using the npm package, use the following lines instead of the one above */
@import "@ditdot-dev/vue-flow-form/dist/vue-flow-form.css";
@import "@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css";
</style>
