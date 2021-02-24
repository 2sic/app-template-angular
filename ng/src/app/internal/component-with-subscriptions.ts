import { Component, OnDestroy } from '@angular/core';
import { Subscription, TeardownLogic } from 'rxjs';

// note: this decorater is not important, but the angular compiler asks for it
// because it thinks this is a real component
// it won't affect inherited components
@Component({
  selector: 'dummy-abstract-component',
  template: '',
})
export abstract class ComponentWithSubscriptions implements OnDestroy {

  /**
   * Subscription Sink - to collect subscriptions which must be closed later on
   */
  public subSink = new Subscription();

  /**
   * Register a subscription for automatic unsubscribe
   */
  public autoUnsubscribe(teardown: TeardownLogic | Subscription) {
    this.subSink.add(teardown);
  }

  /**
   * Unsubscribe everything
   *
   * @memberof ComponentWithSubscriptions
   */
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
