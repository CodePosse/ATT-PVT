import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: () => import('app/pages/pages.module').then(m => m.PagesModule) },
  { path: 'login', loadChildren: () => import('app/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('app/pages/register/register.module').then(m => m.RegisterModule) },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
});