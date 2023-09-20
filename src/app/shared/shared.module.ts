import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Error404Component,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SideMenuComponent
  ]
})
export class SharedModule { }
