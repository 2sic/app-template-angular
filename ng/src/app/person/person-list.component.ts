import { Component, OnInit } from '@angular/core';
import { Data } from '@2sic.com/dnn-sxc-angular';
import { Person } from '../models/person.model';
import { PersonsService } from '../services/persons.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'person-list',
    templateUrl: './person-list.component.html',
})
export class PersonListComponent {
    persons: Observable<Person[]>;

    constructor(
        public personSvc: PersonsService
    ) {
      this.persons = personSvc.Persons;
    }

}
