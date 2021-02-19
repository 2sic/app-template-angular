import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { ApiDemoComponent } from './api/api-demo.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DebugComponent } from './debug/debug.component';
import { IntroIntegrateComponent } from './introduction/pages/integrate.component';
import { IntroRoutingComponent } from './introduction/pages/routing.component';


const routes: Routes = [
  { path: 'intro', component: IntroductionComponent, children: [
      { path: 'integrate', component: IntroIntegrateComponent },
      { path: 'routing', component: IntroRoutingComponent }
    ]
  },
  { path: 'team', component: TeamComponent },
  { path: 'team/:name', component: TeamComponent },
  { path: 'api', component: ApiDemoComponent },
  { path: 'debug', component: DebugComponent },
  { path: '**', redirectTo: '/intro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
