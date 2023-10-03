/*  ---------------------------------------------------------------------------
    Tutorial
    ---------------------------------------------------------------------------
    This main module configuration has two special things it includes
    - DnnInterceptor: this ensures all http-requests will have the neecessary DNN headers
    - ContentManagerModule: this enables attributes like sxc-toolbar for editing UIs
    ---------------------------------------------------------------------------
*/
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ContentManagerModule, SxcRootModule } from '@2sic.com/sxc-angular';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TitleComponent } from "./layout/title.component";
import { NavigationComponent } from "./layout/navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,        // this tells Angular to run in a browser
    AppRoutingModule,     // this contains the application link-structure
    HttpClientModule,     // this enables web-api calls and should only be included in the App root

    // Impontant: don't load sub-modules here if you want lazy-loading to work
    // ExamplesModule,    // not added here, as it should lazy-load

    // 2sxc Module #StepBootstrap
    SxcRootModule,     // this is important in the app-root, as it ensures that context is shared in sub-modules
    ContentManagerModule, // this is needed for edit-toolbars to work
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
