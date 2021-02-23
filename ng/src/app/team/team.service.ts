import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { Person } from './person/person.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  selectedBu$ = new BehaviorSubject<string>('');

  team$: Observable<Person[]>;

  constructor(data: Data) {
    this.team$ = this.selectedBu$.pipe(
      tap(x => console.log('team update', x)),
      mergeMap(bu => data.query$<Person[]>('BusinessUnitTeam?bu=' + bu))
    );
  }

  refresh() {
    // just set the filter again, to re-trigger the query
    this.selectedBu$.next(this.selectedBu$.value);
  }
}
