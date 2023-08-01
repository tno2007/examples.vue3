export interface IListItem {
  name: string;
  expanded?: boolean;
  children?: IListItem[];
  // declare a type that allows unknown properties?
  // https://stackoverflow.com/a/42724109/958398
  [key: string]: unknown;
}

export interface IListLevelStyle {
  ul?: string;
  li?: string;
}
