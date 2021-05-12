
import { InjectionToken, TemplateRef } from '@angular/core';
import { IToastConfig } from './interfaces';


export type ToastType = 'warning' | 'info' | 'success';

export class ToastData {
  type: ToastType;
  text?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
  href?: string;
  linkName?: string;
}

export const defaultToastConfig: IToastConfig = {
  position: {
    top: 20,
    right: 20
  },
  animation: {
    fadeOut: 2500,
    fadeIn: 300
  },
};

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');
