import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebugComponent } from './debug/debug.component';
import { ApiDemoComponent } from './api/api-demo.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: DebugComponent
  },
  { path: 'api', component: ApiDemoComponent },
  { path: 'debug', component: DebugComponent },
  { path: 'team', component: DebugComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/:name', component: TeamComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
