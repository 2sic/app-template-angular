import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { Person } from './models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  BuFilter = new BehaviorSubject<string>('');
  Persons: Observable<Person[]>;

  constructor(
    data: Data
  ) {
    this.Persons = this.BuFilter.pipe(
      mergeMap(bu => data.query$<Person[]>('BusinessUnitTeam?bu=' + bu))
      );
  }
}
