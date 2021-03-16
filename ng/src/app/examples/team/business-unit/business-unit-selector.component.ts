import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessUnit } from './business-unit.model';
import { Data } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-business-unit-selector',
  templateUrl: './business-unit-selector.component.html',
  styleUrls: ['./business-unit-selector.component.scss']
})
export class BusinessUnitSelectorComponent {

  /** Stream of business units, provided back the backend */
  businessUnits$: Observable<BusinessUnit[]>;

  constructor(data: Data) {
    // Query backend for stream of BusinessUnit[]
    // #ExampleData
    this.businessUnits$ = data.content$<BusinessUnit[]>('BusinessUnit');

    // Demo, to just get one - note that you'll have to replace the ID 19403 with one on your system
    // const buManager = data.content<BusinessUnit>('BusinessUnit');
    // const oneBu$ = buManager.get(19403);
    // oneBu$.subscribe((bu) => console.log(`Got BU ${bu.Name}`, bu));
  }
}
