import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class PersonComponent {
  @Input({ required: true }) person!: Person;
}
