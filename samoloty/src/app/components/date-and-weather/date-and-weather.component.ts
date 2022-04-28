import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IConsolidatedWeather } from 'src/app/models/consolidatedWeather';
import { ILocation } from 'src/app/models/location';
import { IWeather } from 'src/app/models/weather';

@Component({
  selector: 'app-date-and-weather',
  templateUrl: './date-and-weather.component.html',
  styleUrls: ['./date-and-weather.component.scss']
})
export class DateAndWeatherComponent implements OnInit {
  date: Date = new Date();
  weather: IConsolidatedWeather | undefined;
  woeid: number = 0;
  weatherImageUrl: string = "";

  constructor(private httpClient: HttpClient) { 
  }

  ngOnInit(): void {
    this.httpClient.get<ILocation[]>("https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/location/search/?query=warsaw"
    ).toPromise().then(result => {
      let location = result?.pop();

      if(!location) {
        console.error('No data here!');
        return;
      }

      this.woeid = location.woeid;

      return this.httpClient.get<IWeather>(`https://thingproxy.freeboard.io/fetch/https://www.metaweather.com/api/location/${this.woeid}`).toPromise()
    }).then(result => {
      let weather = result?.consolidated_weather.pop();

      if(!weather) {
        console.error('No data here!');
        return;
      }

      this.weather = weather;

      this.weatherImageUrl = this.getWeatherImageUrl();
    });   
  }

  getWeatherImageUrl() : string {
    return `https://www.metaweather.com/static/img/weather/${this.weather?.weather_state_abbr}.svg`
  }
}