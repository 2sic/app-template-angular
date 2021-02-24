/*  ---------------------------------------------------------------------------
    Tutorial
    ---------------------------------------------------------------------------
    This main module configuration has two special things it includes
    - DnnInterceptor: this ensures all http-requests will have the neecessary DNN headers
    - ContentManagerModule: this enables attributes like sxc-toolbar for editing UIs
    ---------------------------------------------------------------------------
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DnnInterceptor, ContentManagerModule } from '@2sic.com/dnn-sxc-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './team/person/person.component';
import { BusinessUnitSelectorComponent } from './team/business-unit/business-unit-selector.component';
import { DebugComponent } from './debug/debug.component';
import { ApiDemoComponent } from './api/api-demo.component';
import { TeamComponent } from './team/team.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TeamExplainedComponent } from './team/team-explained/team-explained.component';
import { ApiExplainedComponent } from './api/api-explained/api-explained.component';
import { DebugExplainedComponent } from './debug/debug-explained/debug-explained.component';
import { TitleComponent } from './title/title.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    BusinessUnitSelectorComponent,
    DebugComponent,
    ApiDemoComponent,
    TeamComponent,
    IntroductionComponent,
    TeamExplainedComponent,
    ApiExplainedComponent,
    DebugExplainedComponent,
    TitleComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContentManagerModule    // this is needed for edit-toolbars to work
  ],
  providers: [
    DnnInterceptor,         // this ensures that requests sent to DNN include the proper header
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
