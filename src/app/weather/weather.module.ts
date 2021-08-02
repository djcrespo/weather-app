import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicModule } from '@ionic/angular';

import { WeatherPageRoutingModule } from './weather-routing.module';

import { WeatherPage } from './weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherPageRoutingModule
  ],
  declarations: [WeatherPage],
  providers: [
    Geolocation
  ]
})
export class WeatherPageModule {}
