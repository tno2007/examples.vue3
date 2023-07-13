export interface IMeta {}

export interface IResponse {
  meta: IMeta;
}

export interface IListItem {
  id?: string;
  name: string;
  children?: Array<IListItem>;
  // declare a type that allows unknown properties?
  // https://stackoverflow.com/a/42724109/958398
  [key: string]: unknown;
}

const a: IListItem[] = [
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
];
