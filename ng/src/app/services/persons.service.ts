import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { Person } from '../models/person';
import { BusinessUnit } from '../models/business-unit';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  BuFilter = new BehaviorSubject<string>('');
  Persons: Observable<Person[]>;

  constructor(
    private data: Data
  ) {
    this.Persons = this.BuFilter.pipe(
      flatMap(bu => data.query$<PersonQuery>('BusinessUnitTeam')),
      map(pq => pq.Default)
      );
  }
}

interface PersonQuery {
  Default: Person[];
}
