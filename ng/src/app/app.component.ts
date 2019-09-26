import { Component, ElementRef } from '@angular/core';
import { DnnAppComponent, Context } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends DnnAppComponent {
  title = 'test-dnn-sxc-angular';
  constructor(el: ElementRef, context: Context) {
    super(el, context);
  }
}
