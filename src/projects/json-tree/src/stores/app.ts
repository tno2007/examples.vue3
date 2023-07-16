import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const tree = ref([
    {
      label: "Home",
      name: "Home",
    },
    {
      label: "Profile",
      name: "Profile",
    },
    {
      label: "Services",
      name: "Services",
      class: "red",
      children: [
        {
          label: "Immigration",
          name: "Immigration",
          class: "blue",
          children: [
            {
              _id: "Onboarding questionnaire",
              label: "Onboarding questionnaire",
              name: "Onboarding questionnaire",
              class: "green"
            },
          ],
        },
        {
          label: "Sable Explore",
          name: "Sable Explore",
        },
      ],
    },
  ]);

  return { tree };
});
