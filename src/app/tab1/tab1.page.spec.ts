import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  temp: number;
  city: string = 'Moscow';
  weather: any = { weather: [{ main: '', description: '', icon: '' }] };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.temp = data.main.temp;
      this.weather = data;
    });
  }
}
