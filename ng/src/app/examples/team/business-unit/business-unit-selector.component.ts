import { SxcApp } from '@2sic.com/sxc-angular';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessUnit } from './business-unit.model';

@Component({
  selector: 'app-business-unit-selector',
  templateUrl: './business-unit-selector.component.html',
  styleUrls: ['./business-unit-selector.component.scss']
})
export class BusinessUnitSelectorComponent {

  /** Stream of business units, provided back the backend */
  businessUnits$: Observable<BusinessUnit[]>;

  constructor(app: SxcApp) {
    // Query backend for stream of BusinessUnit[]
    // #ExampleData
    this.businessUnits$ = app.data<BusinessUnit>('BusinessUnit').getAll();

    // Demo, to just get one - note that you'll have to replace the ID 19403 with one on your system
    // const buManager = app.data<BusinessUnit>('BusinessUnit');
    // const oneBu$ = buManager.get(19403);
    // oneBu$.subscribe((bu) => console.log(`Got BU ${bu.Name}`, bu));
  }
}
