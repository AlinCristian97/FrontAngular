import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalExecutorService {
  subscription: Subscription | undefined;

  start(initialDelayInMiliseconds: number, periodInMiliseconds: number, callback: () => void) {
    if (!this.subscription) {
      this.subscription = timer(initialDelayInMiliseconds, periodInMiliseconds).subscribe(() => {
        callback();
      });
    }
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

  resetPeriod(periodInMiliseconds: number, callback: () => void) {
    this.stop();
    this.start(periodInMiliseconds, periodInMiliseconds, callback);
  }
}