import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToleRoutingModule } from './tole-routing.module';
import { ToleComponent } from './tole.component';


@NgModule({
  declarations: [
    ToleComponent
  ],
  imports: [
    CommonModule,
    ToleRoutingModule
  ]
})
export class ToleModule { }
