<script setup lang="ts">
import type { FormKitSchemaCondition, FormKitSchemaNode } from "@formkit/core";
import { reactive, ref } from "vue";

const data = reactive({
  model: {},
  plugins: [],
  stringify: (value: any) => JSON.stringify(value, null, 2),
  cl: (target: any) => () => {
    console.log(target);
    target.stepNext();
  },
});

// const model = ref({});

const schema = ref<FormKitSchemaCondition | FormKitSchemaNode[]>([
  {
    $el: "h1",
    children: "Carbon Sequestration Grant",
  },
  {
    $cmp: "FormKit",
    props: {
      type: "form",
      id: "form",
      //onSubmit: "$submitApp",
      //plugins: "$plugins",
      actions: false,
    },
    children: [
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
                  {
                    value: 4,
                    label: "Show four",
                  },
                ],
              },
              {
                $el: "div",
                children: "$stringify($get(enableStep2).value)",
              },
              {
                $formkit: "button",
                //bind: "$nextAttrs",
                children: "jhhhgh",
                onClick: "$cl($slots)",
              } /*
              {
                $el: "div",
                children: [
                  {
                    $cmp: "FormKit",
                    bind: "$nextAttrs",
                    props: {
                      type: "button",
                      label: {
                        if: "$nextLabel",
                        then: "$nextLabel",
                        else: "$ui.next.value",
                      },
                      "data-next": "$isLastStep === false",
                      onClick: "$handlers.next",
                    },
                  },
                ],
              },*/,

              //"$slots.stepNext",
            ],
          },
          {
            $formkit: "step",
            name: "two",
            key: "two",
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
            key: "three",
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
            nextLabel: "Click me",
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
              "$slots.input",
            ],
            $slots: "",
            show: "$get(enableStep2).value > 0",
          },
        ],
      },
    ],
  },
  {
    $el: "pre",
    children: "$stringify( $get(form).value )",
  },
]);
</script>

<template>
  <FormKitSchema :schema="schema" :data="data">
    <template #stepNext="{ handlers, node }">
      <!-- incrementStep returns a callable function -->
      <FormKit
        type="button"
        @click="handlers.incrementStep(1, node.context)()"
        label="Custom Next"
        data-next="true"
      />
    </template>
  </FormKitSchema>
</template>

<style></style>
