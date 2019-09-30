import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DnnInterceptor, ContentManagerModule } from '@2sic.com/dnn-sxc-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person/person-list.component';
import { PersonComponent } from './person/person.component';
import { BusinessUnitSelectorComponent } from './business-unit-selector/business-unit-selector.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { DebugComponent } from './debug/debug.component';
import { ApiDemoComponent } from './api-demo/api-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonComponent,
    BusinessUnitSelectorComponent,
    InstructionsComponent,
    DebugComponent,
    ApiDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContentManagerModule // this is needed for toolbars
  ],
  providers: [DnnInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
