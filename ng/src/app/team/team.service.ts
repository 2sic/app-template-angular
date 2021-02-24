import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { Person } from './person/person.model';

@Injectable({
  // this means that the service is not shared (not singleton)
  // so each component asking for this will get an own copy
  providedIn: 'any',
})
export class TeamService {
  private selectedBu$ = new BehaviorSubject<string>('');

  /** This will contain the persons returned from the API */
  team$: Observable<Person[]>;

  constructor(data: Data) {
    this.team$ = this.selectedBu$.pipe(switchMap(bu => data.query$<Person[]>('BusinessUnitTeam?bu=' + bu)));
  }

  setFilter(businessUnit: string) {
    this.selectedBu$.next(businessUnit);
  }

  refresh() {
    // just set the filter again, to re-trigger the query
    this.setFilter(this.selectedBu$.value);
  }
}
