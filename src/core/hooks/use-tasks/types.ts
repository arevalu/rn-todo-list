export enum FilterOptions {
  ALL = 'All',
  COMPLETED = 'Completed',
  UNCOMPLETED = 'Uncompleted',
}

export interface Option {
  active: boolean;
  name: FilterOptions;
}
