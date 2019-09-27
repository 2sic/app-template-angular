import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessUnit } from '../models/business-unit';
import { Data } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-business-unit-selector',
  templateUrl: './business-unit-selector.component.html',
  styleUrls: ['./business-unit-selector.component.scss']
})
export class BusinessUnitSelectorComponent implements OnInit {

  BuList: Observable<BusinessUnit[]>;
  constructor(
    private data: Data
  ) {
    // get an observable list of BusinessUnit items from the backend
    this.BuList = this.data.content$<BusinessUnit>('BusinessUnit');
   }

  ngOnInit() {
  }

}
