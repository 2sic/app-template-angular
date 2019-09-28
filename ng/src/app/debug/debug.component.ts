import { Component, OnInit } from '@angular/core';
import { Context } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {

  constructor(public context: Context) {
    console.log({context});
    // const x = context.edition$;
  }

  ngOnInit() {
  }

}
