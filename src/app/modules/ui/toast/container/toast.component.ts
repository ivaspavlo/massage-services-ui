
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';

import { ToastConfig, ToastData, TOAST_CONFIG_TOKEN } from '../toast-config';
import { ToastRef } from '../toast-ref';
import { toastAnimations, ToastAnimationState } from '../toast.animation';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit {

  animationState: ToastAnimationState = 'default';
  iconType: string;

  private intervalId;

  constructor(
    readonly data: ToastData,
    readonly ref: ToastRef,
    @Inject(TOAST_CONFIG_TOKEN) public toastConfig: ToastConfig
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
