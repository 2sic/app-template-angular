import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.scss']
})
export class ApiDemoComponent implements OnInit {

  apiMessage$: Observable<string>;

  constructor(data: Data) {
    this.apiMessage$ = data.api('simple').get<string>('hello');
   }

  ngOnInit() {
  }

}
