/*  ---------------------------------------------------------------------------
    Tutorial
    ---------------------------------------------------------------------------
    This entry component extends the DnnAppComponent
    By doing this, it will
    - pick up any configuration attributes on the <app-root> tag
    - automatically initialize all http adapters to auto-set DNN headers
    - ensure that hitting an enter-key on an input field doesn't submit the page, because asp.net would do that

    #StepBootstrap
    ---------------------------------------------------------------------------
*/

import { Component, ElementRef } from '@angular/core';
import { SxcAppComponent, Context } from '@2sic.com/sxc-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends SxcAppComponent {
  constructor(el: ElementRef, context: Context) {
    super(el, context);
  }
}
