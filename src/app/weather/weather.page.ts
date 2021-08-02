import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ApiWeatherService } from '../services/api-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  private latitude: number;
  private longitude: number;
  private response;

  constructor(
    private geolocation: Geolocation,
    private apiWeather: ApiWeatherService
  ) {

  }

  async ngOnInit() {
    await this.geoCoords();
    this.getWeather();
    console.log(this.response)
  }

  async geoCoords() {
   await this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp)
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
          }).catch((error) => {
            console.log('Error getting location', error);
          });
  }

  async getWeather() {
    this.response = await this.apiWeather.getWeatherForCoords(this.latitude, this.longitude);
    console.log(this.response)
  } 

}
