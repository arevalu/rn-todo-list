import { ColorsKey } from '../../core/theme';

export enum FilterOptions {
  ALL = 'All',
  COMPLETED = 'Completed',
  UNCOMPLETED = 'Uncompleted',
}

export enum CategoryType {
  MY_TASKS = 'My Tasks',
}

interface Category {
  id: string;
  category?: CategoryType;
  displayName: string;
  color?: ColorsKey;
}

export interface Task {
  id: string;
  category?: Category;
  completed: boolean;
  date?: string;
  description?: string;
  title: string;
}
