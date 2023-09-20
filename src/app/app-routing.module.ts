import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {
    path:'reactive',
    loadChildren:() => import('./reactive/reactive.module').then (m => m.ReactiveModule)
  },
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then (m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo:'reactive'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
