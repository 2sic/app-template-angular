import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ComponentWithSubscriptions } from '../internal/component-with-subscriptions';
import { Person } from './person/person.model';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent extends ComponentWithSubscriptions {

  /** The data which is shown in the template */
  team: Person[] = [];

  constructor(private route: ActivatedRoute, public teamSvc: TeamService, private cdr: ChangeDetectorRef) {
    super();
    // listen to route changes and tell the team-service to filter by the route specified
    // this must happen in this component, as the route belongs to the component
    // and the service cannot know the components route.
    this.autoUnsubscribe(
      this.route.params.pipe(map(p => p.name || '')).subscribe(name => this.teamSvc.setFilter(name))
    );

    // listen to team changes and add to view, + trigger detectChanges an we want OnPush strategy
    this.autoUnsubscribe(this.teamSvc.team$.subscribe((t => {
      this.team = t;
      this.cdr.detectChanges();
    })));
  }

  /** This ensures that angular can refresh the list in a faster/optimal way */
  trackById(index: number, person: Person): number { return person.Id; }


  /** Create a toolbar configuration for a person or for new */
  toolbarFor(person?: Person) {
    const mainConfig = 'toolbar=empty?contentType=Person&entityId=' + (person?.Id ?? '0');
    return person
      ? [mainConfig, "edit", "delete&color=gray?entityGuid=" + person.Guid + "&title=" + person.Name]
      : [mainConfig, 'new']
  }
}
