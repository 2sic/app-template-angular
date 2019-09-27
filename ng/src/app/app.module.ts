import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DnnInterceptor } from '@2sic.com/dnn-sxc-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person/person-list.component'
import { PersonComponent } from './person/person.component';
import { BusinessUnitSelectorComponent } from './business-unit-selector/business-unit-selector.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonComponent,
    BusinessUnitSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DnnInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
