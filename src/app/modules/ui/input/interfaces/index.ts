
export type InputTypes = 'text' | 'number' | 'textarea' | 'phone' | 'password' | 'date';

export interface IMaskNumberInput {
  blocks: number[];
  separator: string;
}
