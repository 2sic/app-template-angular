import { Component } from '@angular/core';
import { Context } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
})
export class DebugComponent {
  constructor(public context: Context) {
  }
}
