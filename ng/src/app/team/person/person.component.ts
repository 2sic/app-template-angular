import { Component, Input } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person: Person;

  // constructor(private personService: PersonsService) {

  // }

  // toolbarConfig() {
  //   return { toolbar: { entityId: this.person.Id } };
  // }

  // refresh() {
  //   console.log('refresh called');
  //   this.personService.refresh();
  // }
}
