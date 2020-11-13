import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WeatherInfoMainComponent } from './weather-info-main.component';



@NgModule({
  declarations: [WeatherInfoMainComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [WeatherInfoMainComponent]
})
export class WeatherInfoMainModule { }
