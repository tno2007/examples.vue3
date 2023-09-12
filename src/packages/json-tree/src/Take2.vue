<script setup lang="ts">
import { ref } from "vue";
import type { IListLevelStyle } from "./components/ul-li-component/typings";
import UlComponent from "./components/ul-li-component/ul-component.vue";
import MenuLink from "./MenuLink.vue";

const menu = ref([
  {
    icon: "home",
    name: "Home",
  },
  {
    icon: "user",
    name: "Your profile",
  },
  {
    icon: "globe",
    name: "Services",
    children: [
      {
        name: "Immigration",
        children: [
          {
            name: "Onboarding questionnaire",
            children: [
              {
                name: "Version 1",
              },
            ],
          },
        ],
      },
      {
        name: "Sable Explore",
      },
    ],
  },
  {
    icon: "folder-open",
    name: "Your documents",
  },
  {
    icon: "exclamation-triangle",
    name: "Problem? Let us know",
  },
]);

const listLevelStyles: IListLevelStyle[] = [
  {
    ul: "space-y-2",
  },
  {
    ul: "py-2 space-y-2 bg-neutral-100",
  },
  {
    ul: "bg-neutral-200",
  },
  {
    ul: "bg-neutral-300",
  },
];
</script>

<template>
  <UlComponent :items="menu" :list-level-styles="listLevelStyles">
    <template #level1="data">
      <MenuLink
        :has-children="data.hasChildren"
        :label="data.label"
        :icon="data.icon"
        :expanded="data.expanded"
        :level="data.level"
      ></MenuLink>
    </template>
    <template #level2="data">
      <MenuLink
        :has-children="data.hasChildren"
        :label="data.label"
        :icon="data.icon"
        :expanded="data.expanded"
        :level="data.level"
      ></MenuLink>
    </template>
    <template #level3="data">
      <MenuLink
        :has-children="data.hasChildren"
        :label="data.label"
        :level="data.level"
      ></MenuLink>
    </template>
    <template #level4="data">
      <MenuLink
        :has-children="data.hasChildren"
        :label="data.label"
        :level="data.level"
      ></MenuLink>
    </template>
  </UlComponent>
</template>
