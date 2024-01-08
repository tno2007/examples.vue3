<script setup lang="ts">
import { ref } from "vue";
import { FormKitSchema } from "@formkit/vue";
const percentage = ref(100);

const schema = ref([
  {
    $el: "div",
    attrs: {
      class:
        "p-4 bg-white border border-gray-200 rounded-lg shadow mb-4 font-sans",
    },
    children: [
      {
        $el: "div",
        attrs: {
          class: "flex items-center mb-1",
        },
        children: [
          {
            $el: "div",
            attrs: {
              class: "flex-shrink-0 p-1 bg-gray-300 rounded-full",
            },
            children: [
              {
                $el: "i",
                attrs: {
                  class: "fa-solid fa-user text-cyan-800",
                },
              },
            ],
          },
          {
            $el: "h5",
            attrs: {
              class: "pl-3 text-lg font-medium leading-none text-gray-900",
            },
            children: "$cardName",
          },
        ],
      },
    ],
  },
]);

const data = ref({
  cardName: "Profile",
});
</script>

<template>
  <FormKitSchema :schema="schema" :data="data"></FormKitSchema>

  <div
    class="p-4 bg-white border border-gray-200 rounded-lg shadow mb-4 font-sans"
  >
    <!-- icon and name -->
    <div class="flex items-center mb-1">
      <div class="flex-shrink-0 p-1 bg-gray-300 rounded-full">
        <i class="fa-solid fa-user text-cyan-800"></i>
      </div>
      <h5
        class="pl-3 text-lg font-medium leading-none text-gray-900 dark:text-white"
      >
        Profile
      </h5>
    </div>
    <!-- /icon and name -->
    <!-- card content -->

    <!-- progress bar-->
    <div class="w-full h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-4">
      <div
        class="h-5 text-md --font-medium text-white text-center p-1 leading-none rounded-full"
        :class="[percentage < 50 ? 'bg-yellow-400' : 'bg-green-500']"
        :style="{ width: percentage + '%' }"
      >
        {{ percentage }}%
      </div>
    </div>

    <!-- /progress bar-->

    <!-- action button -->
    <button
      type="button"
      class="text-gold-400 bg-transparent hover:text-white border border-gold-400 hover:bg-gold-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
    >
      Update
    </button>
    <!-- /action button -->

    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

    <p class="font-light">
      Your profile is complete and up to date. You can still update your details
    </p>

    <!-- /card content -->
  </div>
</template>

<!--
    class="text-cyan-800 fill-current h-6 w-6"
-->
