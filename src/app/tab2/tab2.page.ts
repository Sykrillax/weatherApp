import { Component, OnInit } from '@angular/core';
import { ForecastWeatherService } from '../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public forecastData: any[] = [];

  constructor(private forecastService: ForecastWeatherService, private router: Router) { }

  ngOnInit(): void {
    this.forecastService.get5DayForecastByCity('Sleman').subscribe((result: any) => {
      // Here you can process the forecast data as needed
      console.log(result); // For demonstration purposes, logging the entire response.
      this.forecastData = result.list;
    });
  }

  formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()]; // Ambil nama bulan dari array monthNames
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // Convert 24-hour format to 12-hour format
    return `${day} ${month} - ${hour}:${minute} ${ampm}`;
  }

  goToDetail(forecast: any): void {
    this.router.navigate(['/detail'], { queryParams: { special: JSON.stringify(forecast) } });
  }
}
