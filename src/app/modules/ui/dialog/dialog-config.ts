
import { ComponentFactory } from '@angular/core';
import { IDialogConfigData } from './interfaces';


export class DialogConfig {
  
  contentFactory: ComponentFactory<any>;
  data: IDialogConfigData;
  
  constructor(contentFactory: ComponentFactory<any>, data?: any) {
    this.contentFactory = contentFactory;
    this.data = { data };
  }

}
