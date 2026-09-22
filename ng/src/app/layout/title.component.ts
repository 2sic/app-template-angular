import { SxcContext, SxcTagToolbarDirective } from '@2sic.com/sxc-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  imports: [SxcTagToolbarDirective]
})
export class TitleComponent {

  constructor(public sxcContext: SxcContext) { }
}
