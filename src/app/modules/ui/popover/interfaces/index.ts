import { ConnectionPositionPair } from "@angular/cdk/overlay";
import { TemplateRef, Type } from "@angular/core";


export type PopoverParams<T> = {
  data?: T;
  width?: string | number;
  height?: string | number;
  position?: Partial<ConnectionPositionPair>;
  origin?: HTMLElement;
  content: PopoverContent;
}

export type PopoverContent = TemplateRef<any> | Type<any> | string;

export type PopoverCloseEvent<T = any> = {
  type: 'backdropClick' | 'close';
  data: T;
}

export type PopoverRendererMethod = 'template' | 'component' | 'text';
