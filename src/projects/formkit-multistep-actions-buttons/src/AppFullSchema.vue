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

const scheme1 = [
  {
    $formkit: "text",
    label: "Name",
    prefixIcon: "avatarMan",
  },
  {
    $formkit: "text",
    id: "enableStep2",
    name: "enableStep2",
    label: "Enable Step 2",
    options: [],
  },
  {
    $formkit: "text",
    id: "enableStep3",
    name: "enableStep3",
    label: "Enable Step 3",
  },
];

const scheme2 = [
  {
    $formkit: "text",
    label: "Surname",
  },
  {
    $formkit: "text",
    id: "enableStep3",
    name: "enableStep3",
    label: "Enable Step 3",
  },
];

const i = ref(0);
const prev = () => {
  if (i.value <= 0) return;
  i.value -= 1;
};
const next = () => {
  if (i.value >= 1) return;
  i.value += 1;
};

const promoteObjectArrayItems = (
  array: any[],
  idKey: string,
  promotions: any[],
  keepCopyOfPromotedItems: false
) => {
  // loop thru array
  // for each one
  // see if jey equal to the value in the array

  //[].indexOf()

  // ! pass [] into this fn, but dont return a value from this array, just print out the [] you passed in
  // to see if the passed in array was altered

  // create safe working copy of passed in array
  const workingArray = [...array];

  // run topList array in reverse so it add top items in the order specified
  for (let i = promotions.length - 1; i >= 0; i--) {
    // get current loop item by i index
    const p = promotions[i];
    // find index where top item is
    const itemIndex = workingArray.findIndex((a) => a[idKey] === p);
    // skip further processing if match not found
    if (itemIndex == -1) continue;

    // get ref to the item found
    const item = workingArray[itemIndex];

    /*
    if (keepCopyOfPromotedItems) {
      const deletedItem = workingArray.splice(itemIndex, 1, item);
    } else {
      const deletedItem = workingArray.splice(itemIndex, 1);
    }
    */

    const deletedItem = keepCopyOfPromotedItems
      ? workingArray.splice(itemIndex, 1, item)
      : workingArray.splice(itemIndex, 1);

    // move item from index (no copy)
    //const deletedItem = workingArray.splice(itemIndex, 1);

    console.log("deleted", deletedItem);
    console.log("workingArray", workingArray);

    // make copy of deleted item

    // promote the current top-list item to the top of the array
    /*
    workingArray.splice(
      0, // start processing from index-0 (start) of array,
      0, // how many items to remove
      workingArray.splice(itemIndex, 1)[0] // detach the item and return it
    );
    */
  }

  return workingArray;
};

let b = [
  {
    label: "Serbia and Montenegro",
    value: 1328,
  },
  {
    label: "New Zealand",
    value: 5578,
  },
  {
    label: "Australia",
    value: 5428,
  },
  {
    label: "Ireland",
    value: 5553,
  },
];

const c = promoteObjectArrayItems(b, "value", [5553]);

//console.log("b", b);
//console.log("c", c);
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

  <div class="flex justify-between">
    <button @click="prev">Go -1</button>
    <button @click="next">Go +1</button>
  </div>
  <!-- schema -->
  <div v-auto-animate>
    <FormKitSchema :schema="scheme1" v-if="i == 0" />
    <FormKitSchema :schema="scheme2" v-if="i == 1" />
  </div>

  <div></div>

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
