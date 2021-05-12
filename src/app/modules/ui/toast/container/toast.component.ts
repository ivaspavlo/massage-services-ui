
import { Component, OnInit, Inject } from '@angular/core';

import { ToastData, TOAST_CONFIG_TOKEN } from '../toast-config';
import { ToastRef } from '../toast-ref';
import { toastAnimations, ToastAnimationState } from '../toast.animation';
import { IToastConfig } from '../interfaces';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [toastAnimations.fadeToast]
})
export class ToastComponent implements OnInit {

  public animationState: ToastAnimationState = 'default';
  public iconType: string;

  private intervalId;

  constructor(
    readonly data: ToastData,
    readonly ref: ToastRef,
    @Inject(TOAST_CONFIG_TOKEN) public toastConfig: IToastConfig
  ) {
    this.iconType = data.type === 'success' ? 'done' : data.type;
  }

  ngOnInit() {
    this.intervalId = setTimeout(() => this.animationState = 'closing', 5000);
  }
  
  public close() {
    this.ref.close();
  }

  public onFadeFinished(event) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
  
  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

}
