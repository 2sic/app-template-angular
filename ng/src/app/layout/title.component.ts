import { ContentManagerModule, Context } from '@2sic.com/sxc-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  imports: [ContentManagerModule]
})
export class TitleComponent {

  constructor(public context: Context) { }
}
