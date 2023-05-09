<script setup lang="ts">
import type {
  FormKitSchemaCondition,
  FormKitSchemaNode,
  FormKitFrameworkContext,
} from "@formkit/core";
import { computed } from "vue";
import { reactive, ref } from "vue";

const root = ref();
const multistep = ref();

const go = (delta = 1) => {
  const multiStep = root.value?.$refs?.multistep.node;

  if (!multiStep) return;

  const activeStep = multiStep.context.activeStep;

  if (!activeStep) return;

  const steps = multiStep.context.steps;

  const currentStep = steps.find(
    (step: FormKitFrameworkContext) => step.node.name === activeStep
  );

  if (!currentStep) return;

  const handlers = currentStep.node.context.handlers;
  const node = currentStep.node;

  console.log("currentStep", currentStep);
  handlers.incrementStep(delta, node.context)();
};

const data = reactive({
  model: {},
  plugins: [],
  stringify: (value: any) => JSON.stringify(value, null, 2),
  cl: (target: any) => () => {
    console.log(target);
    target.stepNext();
  },
  go: (delta: number) => () => {
    const multiStep = root.value?.$refs?.multistep.node;

    if (!multiStep) return;

    const activeStep = multiStep.context.activeStep;

    if (!activeStep) return;

    const steps = multiStep.context.steps;

    const currentStep = steps.find(
      (step: FormKitFrameworkContext) => step.node.name === activeStep
    );

    if (!currentStep) return;

    // console.log(currentStep);

    const handlers = currentStep.node.context.handlers;
    const node = currentStep.node;

    //console.log("currentStep", currentStep);
    handlers.incrementStep(delta, node.context)();
  },
  isActive: (stepName: string) => () => {
    //console.log(stepName);
    const multiStep = root.value?.$refs?.multistep.node;
    if (!multiStep) return null;
    const activeStep = multiStep.context.activeStep;
    return activeStep === stepName ? true : false;
  },
});

const a = computed(() => {
  const multiStep = root.value?.$refs?.multistep.node;
  if (!multiStep) return null;
  const activeStep = multiStep.context.activeStep;
  return activeStep === "one" ? true : false;
});

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
    attrs: {
      "v-auto-animate": true,
    },
    children: [
      {
        $formkit: "multi-step",
        tabStyle: "progress",
        allowIncomplete: false,
        ref: "multistep",
        children: [
          {
            $cmp: "FormKit",
            props: {
              type: "step",
              name: "first",
              stepClass: {
                //block: true,
              },
            },
            children: [
              {
                $formkit: "text",
              },
            ],
          },
          {
            $formkit: "step",
            name: "one",
            //stepClass: "block",
            children: [
              {
                $formkit: "text",
                label: "Name",
                prefixIcon: "avatarMan",
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
            ],
          },
          {
            //$cmp: "transition-expand",
            //children: [
            //{
            $formkit: "step",
            name: "two",
            //stepClass: "block",
            key: "two",
            children: [
              {
                $formkit: "text",
                label: "Surname",
              },
            ],
            //if: "$get(enableStep2).value === 2",
            //},
            //],
          },
          {
            $formkit: "step",
            name: "three",
            key: "three",
            //stepClass: "block",
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
            key: "four",
            //stepClass: "block",
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
            show: "$get(enableStep2).value > 0",
          },
        ],
      },
      {
        $el: "div",
        attrs: {
          class: "grid grid-cols-2 gap-4",
        },
        children: [
          {
            $el: "button",
            children: "Previous",
            outerClass: "max-w-0",
            attrs: {
              type: "button",
              onClick: "$go(-1)",
            },
          },
          {
            $el: "button",
            children: "Next",
            outerClass: "max-w-0",
            attrs: {
              type: "button",
              onClick: "$go(1)",
            },
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

const displayIndex = ref(1);
</script>

<template>
  <!-- 
  <button @click="displayIndex = displayIndex == 1 ? 2 : 1">Click here</button>
  <transition-expand>
    <div v-show="displayIndex === 1" class="w-50 h-50 bg-green-100">Page 1</div>
  </transition-expand>
  <transition-expand>
    <div v-show="displayIndex === 2" class="w-50 h-50 bg-yellow-200">
      Page 2
    </div>
  </transition-expand>
-->
  <!-- schema -->
  <div>
    <FormKitSchema :schema="schema" :data="data" ref="root" />
  </div>

  <!-- component   
  <FormKit type="multi-step" ref="multistepX">
    <transition-expand>
      <FormKit type="step" name="one" key="1">
        <FormKit type="text" label="Name:"></FormKit>
      </FormKit>
    </transition-expand>
    <transition-expand>
      <FormKit type="step" name="two" key="2">
        <FormKit type="text" label="Surname:"></FormKit>
      </FormKit>
    </transition-expand>
  </FormKit>
  -->

  <button @click="go(-1)">Go -1</button>
  <br />
  <button @click="go(+1)">Go +1</button>
</template>

<style lang="scss">
.x-block {
  display: block !important;
}

.formkit-outer[data-type="multi-step"] {
  > [data-tab-style="progress"] > .formkit-tabs .formkit-tab-label {
    position: absolute;
    top: 100%;
    width: 100%;
    white-space: nowrap;
    font-size: 0.8rem;
  }
  .formkit-step {
    display: block !important;
    opacity: 1;
    visibility: visible;
    transition: 0.5s;

    &[hidden] {
      opacity: 0;
      visibility: hidden;
      transition: 0.5s;

      height: 0;
      overflow: hidden;
    }
  }
}

.formkit-outer[data-type="multi-step"]
  > [data-tab-style="progress"]
  > .formkit-tabs
  > .formkit-tab[data-active="true"]
  .formkit-tab-label {
  background-color: red;
}
</style>
