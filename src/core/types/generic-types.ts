import { ObjectShape } from 'yup/lib/object';

export type ObjectShapeValues = ObjectShape extends Record<string, infer V>
  ? V
  : never;

export type PickWithRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Partial<T>;

export type Shape<T extends Record<string | number, unknown>> = Partial<
  Record<keyof T, ObjectShapeValues>
>;
