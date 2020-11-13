import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { WeatherInfoMainModule } from "../components/weather-info-main/weather-info-main.module";
import { SearchBarModule } from '../components/search-bar/search-bar.module';
import { WeatherInfoSecondaryModule } from '../components/weather-info-secondary/weather-info-secondary.module';


import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    WeatherInfoMainModule,
    SearchBarModule,
    WeatherInfoSecondaryModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
