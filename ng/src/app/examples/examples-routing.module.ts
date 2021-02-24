import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebugComponent } from './debug/debug.component';
import { ApiDemoComponent } from './api/api-demo.component';
import { TeamComponent } from './team/team.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntroIntegrateComponent } from './introduction/pages/integrate.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DebugComponent
  // },
  { path: 'intro', component: IntroductionComponent, children: [
      { path: 'integrate', component: IntroIntegrateComponent },
      { path: 'routing', component: IntroductionComponent }
    ]
  },
  { path: 'api', component: ApiDemoComponent },
  { path: 'debug', component: DebugComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/:name', component: TeamComponent },
  { path: '**', redirectTo: 'intro' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
