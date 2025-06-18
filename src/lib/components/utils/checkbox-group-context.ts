export const CHECKBOX_GROUP_CONTEXT = Symbol();

export interface CheckboxGroupContext {
  values: Set<string | number>;
  toggle: (val: string | number) => void;
  name?: string;
}
