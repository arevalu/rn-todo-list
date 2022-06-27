import * as yup from 'yup';
import { Shape, Task } from '@core/types';

export type FormFields = Pick<Task, 'description' | 'title'>;

export const getValidationSchema = (): yup.ObjectSchema<Shape<FormFields>> =>
  yup.object().shape({
    description: yup.string().trim(),
    title: yup.string().trim().required('Title is required'),
  });
