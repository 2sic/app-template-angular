/*  ---------------------------------------------------------------------------
    Tutorial
    ---------------------------------------------------------------------------
    This routing file configures the paths which the app knows.

    Since it's a simple example, as most of the routes are actually
    inside the examples-routing.module.ts.
    ---------------------------------------------------------------------------
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'examples', loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule)},
  { path: '**', redirectTo: '/examples/intro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
