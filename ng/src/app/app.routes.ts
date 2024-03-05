import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'examples', children: [
      {
        path: 'intro',
        loadComponent: () => import('./examples/introduction/introduction.component').then(mod => mod.IntroductionComponent),
        children: [
          { path: '', loadComponent: () => import('./examples/introduction/pages/start.component').then(mod => mod.IntroStartComponent) },
          { path: 'integrate', loadComponent: () => import('./examples/introduction/pages/integrate.component').then(mod => mod.IntroIntegrateComponent) },
          { path: 'routing', loadComponent: () => import('./examples/introduction/pages/routing.component').then(mod => mod.IntroRoutingComponent) },
          { path: 'hot-loading', loadComponent: () => import('./examples/introduction/pages/hot-loading.component').then(mod => mod.IntroHotLoadingComponent) },
          { path: 'conventions', loadComponent: () => import('./examples/introduction/pages/conventions.component').then(mod => mod.IntroConventionsComponent) },
          { path: 'deploy', loadComponent: () => import('./examples/introduction/pages/deploy.component').then(mod => mod.IntroDeployComponent) },
        ]
      },
      { path: 'api', loadComponent: () => import('./examples/api/api-demo.component').then(mod => mod.ApiDemoComponent) },
      { path: 'debug', loadComponent: () => import('./examples/debug/debug.component').then(mod => mod.DebugComponent) },
      { path: 'team', loadComponent: () => import('./examples/team/team.component').then(mod => mod.TeamComponent) },
      { path: 'team/:name', loadComponent: () => import('./examples/team/team.component').then(mod => mod.TeamComponent) },
      { path: '**', redirectTo: 'intro' },
    ]
  },
  { path: '**', redirectTo: '/examples/intro' },
];
