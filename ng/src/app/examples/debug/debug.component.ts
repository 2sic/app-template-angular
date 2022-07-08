import { Context } from '@2sic.com/sxc-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
})
export class DebugComponent {
  // the constructor asks for the context to show context information in the html template
  constructor(public context: Context) {
  }
}
