import { Task } from '../../screens/home/types';

interface TaskDetailScreenParams {
  task: Task;
}

export type RootNavigationParams = {
  AddTask: undefined;
  TaskDetail: TaskDetailScreenParams;
  Home: undefined;
};
