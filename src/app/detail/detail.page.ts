import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  weather: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params['special']) {
        this.weather = JSON.parse(params['special']);
      }
    });
  }

  ngOnInit() {}

  save() {
    const favs = JSON.parse(localStorage.getItem('favs') ?? '[]');
    favs.push(this.weather);
    localStorage.setItem('favs', JSON.stringify(favs));
  }

  getWeatherIconUrl(iconCode: string): string {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  }
}
