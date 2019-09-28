import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessUnit } from '../models/business-unit.model';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-business-unit-selector',
  templateUrl: './business-unit-selector.component.html',
  styleUrls: ['./business-unit-selector.component.scss']
})
export class BusinessUnitSelectorComponent implements OnInit {

  buList: Observable<BusinessUnit[]>;
  selected: Observable<string>;
  constructor(
    private data: Data,
    private personSvc: PersonsService
  ) {
    // get an observable list of BusinessUnit items from the backend
    // TODO: 2rm - this should be changed to require BusinessUnit[] instead of BusinessUnit for consistency with query$
    this.buList = this.data.content$<BusinessUnit>('BusinessUnit');
    this.selected = personSvc.BuFilter;
   }

  ngOnInit() {
  }

  selectBu(bu: string) {
    this.personSvc.BuFilter.next(bu);
  }

}
