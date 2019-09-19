import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  template: `
    <img [attr.src]="person.Image" />
    <b>{{person.Name}}</b><br>
  `
})
export class PersonComponent {
  @Input() person: any;
}