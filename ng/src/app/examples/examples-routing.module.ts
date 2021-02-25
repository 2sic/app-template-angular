import { IntroStartComponent } from './introduction/pages/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebugComponent } from './debug/debug.component';
import { ApiDemoComponent } from './api/api-demo.component';
import { TeamComponent } from './team/team.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntroIntegrateComponent } from './introduction/pages/integrate.component';
import { IntroRoutingComponent } from './introduction/pages/routing.component';
import { IntroHotLoadingComponent } from './introduction/pages/hot-loading.component';
import { IntroConventionsComponent } from './introduction/pages/conventions.component';
import { IntroDeployComponent } from './introduction/pages/deploy.component';

const routes: Routes = [
  { path: 'intro', component: IntroductionComponent, children: [
    { path: '', component: IntroStartComponent },
    { path: 'integrate', component: IntroIntegrateComponent },
    { path: 'routing', component: IntroRoutingComponent },
    { path: 'hot-loading', component: IntroHotLoadingComponent },
    { path: 'conventions', component: IntroConventionsComponent },
    { path: 'deploy', component: IntroDeployComponent },
  ]},
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
