import { provideSxc } from '@2sic.com/sxc-angular';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // Step 1: register HttpClient and the 2sxc interceptor for the whole app.
    provideSxc(),
  ],
};
