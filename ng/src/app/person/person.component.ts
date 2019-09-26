import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html'
})
export class PersonComponent {
  @Input() person: any;
}
