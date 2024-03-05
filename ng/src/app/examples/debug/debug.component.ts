import { Context } from '@2sic.com/sxc-angular';
import { Component } from '@angular/core';
import { DebugExplainedComponent } from './debug-explained/debug-explained.component';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  standalone: true,
  imports: [DebugExplainedComponent]
})
export class DebugComponent {
  // the constructor asks for the context to show context information in the html template
  constructor(public context: Context) {
  }
}
