import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/modules/home-page/home-page.component';


export const HomeLayoutRoutingModule: Routes = [
  { path: '', component: HomePageComponent }
];
