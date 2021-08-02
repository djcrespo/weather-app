import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  private url: String = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey: String = '0f86a4975cf6d7f20116ac8703992469';
  private units: String = 'metric'

  constructor(
    private http: HttpClient
  ) { }

  getWeatherForCoords(lat, lon) {
    return new Promise(resolve => {
      this.http
      .get(this.url+'?lat='+lat+'&lon='+lon+'&units='+this.units+'&appid='+this.apiKey)
      .subscribe(data => {
        // console.log(res)
      }, err => {
        console.log(err)
      })
    })
  }
}
