
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ToastTypes } from '@app/shared/constants';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private DEFAULT_DURATION_MS = 2000;

  constructor(private snackBar: MatSnackBar) { }

  public pop(msg: string, type = ToastTypes.info, duration = this.DEFAULT_DURATION_MS): void {
    this.snackBar.open(msg, type, { duration });
  }

}
