import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessUnit } from '../models/business-unit.model';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-business-unit-selector',
  templateUrl: './business-unit-selector.component.html',
  styleUrls: ['./business-unit-selector.component.scss']
})
export class BusinessUnitSelectorComponent {

  /** Stream of business units, provided back the backend */
  businessUnits$: Observable<BusinessUnit[]>;

  constructor(private data: Data, private personSvc: PersonsService) {
    // Query backend for stream of BusinessUnit[]
    this.businessUnits$ = this.data.content$<BusinessUnit[]>('BusinessUnit');
  }

}
