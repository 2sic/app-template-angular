import { Context, SxcApp } from '@2sic.com/sxc-angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Person } from './person/person.model';

// #ExampleData
@Injectable({
  // this means that the service is not shared (not singleton)
  // so each component asking for this will get an own copy
  providedIn: 'any',
})
export class TeamService {
  private selectedBu$ = new BehaviorSubject<string>('');

  /** This will contain the persons returned from the API */
  team$: Observable<Person[]>;

  constructor(app: SxcApp, context: Context) {
    // also get guid if in edit mode
    const withGuid = context.sxc?.isEditMode() ? '&includeGuid=true': '';
    this.team$ = this.selectedBu$.pipe(switchMap(bu => app.query<Person[]>(`BusinessUnitTeam?bu=${bu}${withGuid}`).getStream('Default')));
  }

  setFilter(businessUnit: string) {
    this.selectedBu$.next(businessUnit);
  }

  refresh() {
    // just set the filter again, to re-trigger the query
    this.setFilter(this.selectedBu$.value);
  }
}
