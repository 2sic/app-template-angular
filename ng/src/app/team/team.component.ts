import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {

  bu: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.bu = this.route.params.pipe(tap(p => console.log(p)), map(p => p.name || ''));
   }

  ngOnInit() {
  }

}
