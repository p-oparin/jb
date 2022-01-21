import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AppButtonsComponent } from '../shared/components/app-buttons/app-buttons.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppButtonsComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule { }
