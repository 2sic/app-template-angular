import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './examples-routing.module';
import { DebugComponent } from './debug/debug.component';
import { DebugExplainedComponent } from './debug/debug-explained/debug-explained.component';
import { ApiDemoComponent } from './api/api-demo.component';
import { ApiExplainedComponent } from './api/api-explained.component';
import { PersonComponent } from './team/person/person.component';
import { BusinessUnitSelectorComponent } from './team/business-unit/business-unit-selector.component';
import { TeamComponent } from './team/team.component';
import { TeamExplainedComponent } from './team/team-explained.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContentManagerModule } from '@2sic.com/sxc-angular';


@NgModule({
  declarations: [
    // Introduction
    IntroductionComponent,

    // Team pages
    PersonComponent,
    BusinessUnitSelectorComponent,
    TeamComponent,
    TeamExplainedComponent,

    // debug pages
    DebugComponent,
    DebugExplainedComponent,

    // API demo pages
    ApiDemoComponent,
    ApiExplainedComponent,
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,

    // 2sxc Module
    ContentManagerModule, // this is needed for edit-toolbars to work

  ],
})
export class ExamplesModule { }
