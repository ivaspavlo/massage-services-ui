
import { TemplateRef } from '@angular/core';


export type ToastType = 'warning' | 'info' | 'success';

export interface IToast {
  type: ToastType;
  text?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
  href?: string;
  linkName?: string;
}

export interface IToastConfig {
  position?: {
    top: number;
    right: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}
