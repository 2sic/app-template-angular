import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { Person } from './models/person.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  BuFilter = new BehaviorSubject<string>('');
  Persons: Observable<Person[]>;

  constructor(data: Data, private route: ActivatedRoute) {

    const temp = this.route.params.pipe(tap(p => console.log('person service bu:', p)), map(p => p.name || ''))

    this.Persons = this.BuFilter.pipe(mergeMap(bu => data.query$<Person[]>('BusinessUnitTeam?bu=' + bu)));
  }

  refresh() {
    // just set the filter again, to re-trigger the query
    this.BuFilter.next(this.BuFilter.value);
  }
}
