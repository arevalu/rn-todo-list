import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { storage, storedKeys } from '@core/helpers';
import { Task } from '@core/types';
import { FilterOptions, Option } from './types';

/**
 * Types
 */

interface FilteredTasksHook {
  selectedFilter: FilterOptions;
  options: Option[];
  tasks: Task[];
  addTask: (newTask: Task) => void;
  changeFilter: (filterOption: FilterOptions) => void;
  deleteTask: (taskID: string) => void;
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
 * Helpers
 */

const storeTasks = (tasks: Task[]): void =>
  storage.set(storedKeys.TASKS_KEY, JSON.stringify(tasks));

const updateOptions = (
  options: Option[],
  selectedFilter: FilterOptions,
): Option[] =>
  defaultOptions.map(option => ({
    ...option,
    active: option.name === selectedFilter,
  }));

/**
 * Hooks
 */

export const useTasks = (): FilteredTasksHook => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedFilter, setSelectedFilter] = useState(FilterOptions.ALL);
  const options = updateOptions(defaultOptions, selectedFilter);

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

  const addTask = (newTask: Task): void => {
    const savedTasks = storage.getString(storedKeys.TASKS_KEY);
    const tasks = savedTasks ? [...JSON.parse(savedTasks), newTask] : [newTask];

    storeTasks(tasks);
    setTasks(tasks);
  };

  const changeFilter = (filterOption: FilterOptions): void =>
    setSelectedFilter(filterOption);

  const deleteTask = (taskID: string): void => {
    const filteredTasks = tasks.filter(task => task.id !== taskID);

    storeTasks(filteredTasks);
    setTasks(filteredTasks);
  };

  const updateTasks = (updatedTasks: Task[]): void => {
    storeTasks(updatedTasks);
    setTasks(updatedTasks);
  };

  return {
    selectedFilter,
    options,
    tasks: filteredOptions[selectedFilter],
    addTask,
    changeFilter,
    deleteTask,
    updateTasks,
  };
};
