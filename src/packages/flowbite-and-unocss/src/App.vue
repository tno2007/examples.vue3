<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import {
  FwbDropdown,
  FwbListGroup,
  FwbListGroupItem,
  FwbProgress,
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from "flowbite-vue";
</script>

<template>
  <div class="h-6 bg-green-500 m-5"></div>

  <button 
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>

  <!-- dropdown-->
  <fwb-dropdown text="Menu">
    <fwb-list-group>
      <fwb-list-group-item> Profile </fwb-list-group-item>
      <fwb-list-group-item> Settings </fwb-list-group-item>
      <fwb-list-group-item> Messages </fwb-list-group-item>
      <fwb-list-group-item> Download </fwb-list-group-item>
    </fwb-list-group>
  </fwb-dropdown>

  <!-- next section-->
  <fwb-progress
    :progress="50"
    label-position="inside"
    label-progress
    size="lg"
    class="p-5"
  />

  <div class="bg-green-500 bg-"></div>

  <fwb-accordion class="p-4">
    <fwb-accordion-panel>
      <fwb-accordion-header>header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400 bg-">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              href="/docs/getting-started/introduction/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >get started</a
            >
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>another header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the
            <a
              href="https://flowbite.com/figma/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Figma design system</a
            >
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
    <fwb-accordion-panel>
      <fwb-accordion-header>and one more header</fwb-accordion-header>
      <fwb-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the
            <a
              href="https://flowbite.com/figma/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Figma design system</a
            >
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<style lang="scss"></style>
