import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent {

  constructor(private route: ActivatedRoute, public personsSvc: PersonsService) {
    const subscription = this.route.params.pipe(map(p => p.name || ''))
      .subscribe(name => personsSvc.BuFilter.next(name));
   }

}
