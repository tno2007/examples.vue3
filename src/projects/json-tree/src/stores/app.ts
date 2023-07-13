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
      children: [
        {
          label: "Immigration",
          name: "Immigration",
          children: [
            {
              _id: "Onboarding questionnaire",
              label: "Onboarding questionnaire",
              name: "Onboarding questionnaire",
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
