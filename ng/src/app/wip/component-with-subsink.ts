import { Component, OnDestroy } from '@angular/core';
import { Subscription, TeardownLogic } from 'rxjs';

@Component({
  selector: 'dummy-abstract-component',
  template: '',
})
export abstract class ComponentWithSubscriptions implements OnDestroy {

  public subSink = new Subscription();

  public autoUnsubscribe(teardown: TeardownLogic | Subscription) {
    this.subSink.add(teardown);
  }

  ngOnDestroy(): void {
    console.log('on destroy triggered');
    this.subSink.unsubscribe();
  }
}
