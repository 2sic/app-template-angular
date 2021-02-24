/*  ---------------------------------------------------------------------------
    Tutorial
    ---------------------------------------------------------------------------
    This routing file configures the paths which the app knows.

    Since it's a simple example, it is all in one file.
    More complex apps and apps with lazy-loading will have multiple such files.
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
