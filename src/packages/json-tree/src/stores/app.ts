import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { IListItem } from "../components/ul-li-component/typings";

interface ITree {
  name?: string;
  class?: string;
  children?: Array<ITree>;
  // declare a type that allows unknown properties?
  // https://stackoverflow.com/a/42724109/958398
  [key: string]: unknown;
}

export const useAppStore = defineStore("app", () => {
  const tree = ref<IListItem[]>([
    {
      name: "Home",
      xyz: 1,
    },
    {
      name: "Profile",
    },
    {
      name: "Services",
      //expanded: true,
      children: [
        {
          name: "Immigration",
          children: [
            {
              name: "Onboarding questionnaire",
              children: [
                {
                  name: "Fours is a crime",
                  children: [
                    {
                      name: "Fiverish",
                    },
                  ],
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
  ]);

  return { tree };
});
