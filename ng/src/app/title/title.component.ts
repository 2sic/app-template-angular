import { Component } from '@angular/core';
import { Context } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {

  constructor(public context: Context) { }
}
