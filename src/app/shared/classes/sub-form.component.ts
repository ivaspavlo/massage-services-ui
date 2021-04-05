
import { FormGroup } from '@angular/forms';


export abstract class SubFormComponent {

  constructor() { }
  
  abstract createFormGroup(): FormGroup

}
