import { ChangeEvent } from 'react';

export type InputProps = {
  label: string;
  value: string;
  type: 'text' | 'email' | 'textarea';
  onChange: (value: string) => void;
};
