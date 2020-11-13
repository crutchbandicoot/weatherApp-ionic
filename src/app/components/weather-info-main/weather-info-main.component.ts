import { Component, OnInit } from '@angular/core';
import { TempFormat } from './../../models/temp.interface';


@Component({
  selector: 'weather-info-main',
  templateUrl: './weather-info-main.component.html',
  styleUrls: ['./weather-info-main.component.scss'],
})
export class WeatherInfoMainComponent implements OnInit {

  date: any = new Date();
  day: number = this.date.getDay();
  dayList:object = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  today: string = this.dayList[this.day];

  //Variables
  temp: number = 25;
  description: string = 'Sunny';
  location: string = 'Johannesburg ZA';
  
  tempFormat:TempFormat = {
    celcius: "\u00B0C",
    farenheit: "\u00B0F",
  };

  

  constructor() { }

 

  ngOnInit() {
  }

}
