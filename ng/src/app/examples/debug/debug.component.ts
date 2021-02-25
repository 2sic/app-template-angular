import { Component } from '@angular/core';
import { Context } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
})
export class DebugComponent {
  // the constructor asks for the context to show context information in the html template
  constructor(public context: Context) {
  }
}
