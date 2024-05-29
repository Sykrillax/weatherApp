import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'https://api.openweathermap.org/data/2.5/';
  private key = 'd9e72073ad36f278f80b0f3179ab151d';
  private city = 'Sleman';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ForecastWeatherService {
  private apiKey = 'd9e72073ad36f278f80b0f3179ab151d';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  // Method to get 5-day forecast data
  get5DayForecastByCity(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}