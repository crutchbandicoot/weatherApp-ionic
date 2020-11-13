import { Component, OnInit } from '@angular/core';
import { TempFormat } from 'src/app/models/temp.interface';

@Component({
  selector: 'weather-info-secondary',
  templateUrl: './weather-info-secondary.component.html',
  styleUrls: ['./weather-info-secondary.component.scss']
})
export class WeatherInfoSecondaryComponent implements OnInit {

  /**
   * ToDo
   * add icons
   * add media queries for smaller phones
   * add logic and styling for searching
   * add pics for weather conditions (look at using switch case)
   * add search logic and finish styling
   * add panel styling
   * add celcius and farenheit toggle switch
   * add switch logic for the today and 7 days
   * add 7 day styling
   * add expanded menu styling
   * interfaces for api data
   */

  // Variables
  tempMin: number = 12;
  tempMax: number = 28;

  tempFormat:TempFormat = {
    celcius: "\u00B0C",
    farenheit: "\u00B0F",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
