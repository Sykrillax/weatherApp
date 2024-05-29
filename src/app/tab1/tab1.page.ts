import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public weather: any = {};
  public temp: number = 0;
  public city: string = '';
  public weatherDescription: string = '';
  public weatherIcon: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getData().subscribe(
      (result: any) => {
        this.weather = result;
        this.temp = result.main.temp;
        this.city = result.name;
        this.weatherDescription = result.weather[0].description;
        this.weatherIcon = this.getWeatherIcon(result.weather[0].icon);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getWeatherIcon(icon: string): string {
    const iconMap: { [key: string]: string } = {
      '01d': 'sunny',
      '01n': 'moon',
      '02d': 'partly-sunny',
      '02n': 'partly-sunny',
      '03d': 'cloud',
      '03n': 'cloud',
      '04d': 'cloudy',
      '04n': 'cloudy',
      '09d': 'rainy',
      '09n': 'rainy',
      '10d': 'rainy',
      '10n': 'rainy',
      '11d': 'thunderstorm',
      '11n': 'thunderstorm',
      '13d': 'snow',
      '13n': 'snow',
      '50d': 'partly-sunny',
      '50n': 'partly-sunny'
    };
    return iconMap[icon] || 'cloud-outline';
  }
}
