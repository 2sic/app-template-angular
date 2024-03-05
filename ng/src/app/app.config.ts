import { ContentManagerModule, SxcRootModule } from '@2sic.com/sxc-angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule, // this tells Angular to run in a browser
      // 2sxc Module #StepBootstrap
      SxcRootModule, // this is important in the app-root, as it ensures that context is shared in sub-modules
      ContentManagerModule),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
