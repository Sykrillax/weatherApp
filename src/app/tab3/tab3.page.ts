import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  favs: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadFavorites();
  }

  ionViewWillEnter() {
    this.loadFavorites(); // Ensure data is refreshed when the view is entered
  }

  loadFavorites() {
    const favData = localStorage.getItem('favs');
    if (favData) {
      this.favs = JSON.parse(favData);
    }
  }

  removeFavorite(index: number) {
    this.favs.splice(index, 1);
    localStorage.setItem('favs', JSON.stringify(this.favs));
  }

  getWeatherIconUrl(iconCode: string): string {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  }
}
