import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WeatherInfoSecondaryComponent } from "./weather-info-secondary.component";


@NgModule({
  declarations: [WeatherInfoSecondaryComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [WeatherInfoSecondaryComponent]
})
export class WeatherInfoSecondaryModule { }
