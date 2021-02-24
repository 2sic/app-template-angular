import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {

  constructor(private route: ActivatedRoute, public teamSvc: TeamService) {
    const subscription = this.route.params.pipe(map(p => p.name || ''))
      .subscribe(name => teamSvc.selectedBu$.next(name));

    teamSvc.team$.pipe(tap(t => console.log('team component', t))).subscribe();
   }

}
