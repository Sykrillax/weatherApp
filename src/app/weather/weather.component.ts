import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherList: any[] = [];
  city: any = {};

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe((data: any) => {
      this.weatherList = data.list;
      this.city = data.city;
    });
  }
}
