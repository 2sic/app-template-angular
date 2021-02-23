import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent {

  constructor(private route: ActivatedRoute, public teamSvc: TeamService) {
    const subscription = this.route.params.pipe(map(p => p.name || ''))
      .subscribe(name => teamSvc.selectedBu$.next(name));
   }

}
