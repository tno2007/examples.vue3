export interface IListItem {
  name: string;
  children?: IListItem[];
}

export interface IListLevelStyle {
  ul?: string;
  li?: string;
}
