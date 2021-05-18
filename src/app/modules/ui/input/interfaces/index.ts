
export type InputTypes = 'text' | 'number' | 'textarea' | 'phone' | 'password' | 'date';

export type InputColorSchemes = 'primary' | 'secondary';

export interface IMaskInput {
  blocks: number[];
  separator: string;
}
