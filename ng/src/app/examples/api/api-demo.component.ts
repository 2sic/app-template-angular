import { SxcApp } from '@2sic.com/sxc-angular';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
})
export class ApiDemoComponent {

  apiMessage$: Observable<string>;
  nameMessage$: Observable<string>;
  numbers$: Observable<number[]>;
  something$: Observable<Something>;

  constructor(app: SxcApp) {
    // simple version for just a quick call, not re-using the api object
    this.numbers$ = app.api('simple').get('Numbers', '');

    // version for using the api-object many times;
    const simple = app.api('simple');

    // short call version - without parameters
    this.apiMessage$ = simple.get<string>('hello', '');

      // short call version - with parameters
    this.nameMessage$ = simple.get<string>('hello', new HttpParams().set('name', 'Michael'));

    this.something$ = simple.get<Something>('Something', new HttpParams().set('name', 'Samuel Jackson'));
   }
}

interface Something {
  Name: string;
  Birthday: Date;
}
