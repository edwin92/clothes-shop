import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeLayoutRoutingModule } from './home-layout.routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutingModule),
  ]
})
export class HomeLayoutModule { }
