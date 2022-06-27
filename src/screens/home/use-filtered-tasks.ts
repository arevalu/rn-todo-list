import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { storage, storedKeys } from '@core/helpers';
import { Task } from '@core/types';
import { Option } from './filter-section';
import { FilterOptions } from './types';

/**
 * Types
 */

interface FilteredTasksHook {
  selectedFilter: FilterOptions;
  options: Option[];
  tasks: Task[];
  changeFilter: (filterOption: FilterOptions) => void;
  updateTasks: (updatedTasks: Task[]) => void;
}

/**
 * Constants
 */

const defaultOptions = [
  {
    active: true,
    name: FilterOptions.ALL,
  },
  {
    active: false,
    name: FilterOptions.COMPLETED,
  },
  {
    active: false,
    name: FilterOptions.UNCOMPLETED,
  },
];

/**
 * Hooks
 */

export const useFilteredTasks = (): FilteredTasksHook => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedFilter, setSelectedFilter] = useState(FilterOptions.ALL);

  useFocusEffect(
    useCallback(() => {
      const savedTasks = storage.getString(storedKeys.TASKS_KEY);
      setTasks(savedTasks ? JSON.parse(savedTasks) : []);
    }, []),
  );

  const filteredOptions: Record<FilterOptions, Task[]> = {
    [FilterOptions.ALL]: tasks,
    [FilterOptions.COMPLETED]: tasks.filter(task => task.completed),
    [FilterOptions.UNCOMPLETED]: tasks.filter(task => !task.completed),
  };

  const changeFilter = (filterOption: FilterOptions): void =>
    setSelectedFilter(filterOption);

  const updateTasks = (updatedTasks: Task[]): void => setTasks(updatedTasks);

  return {
    selectedFilter,
    options: defaultOptions.map(option => ({
      ...option,
      active: option.name === selectedFilter,
    })),
    tasks: filteredOptions[selectedFilter],
    changeFilter,
    updateTasks,
  };
};
