import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-and-weather',
  templateUrl: './date-and-weather.component.html',
  styleUrls: ['./date-and-weather.component.scss']
})
export class DateAndWeatherComponent implements OnInit {
  date: Date = new Date();
  weather : any;

  constructor(private httpClient: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.httpClient.get("https://community-open-weather-map.p.rapidapi.com/weather&q=London,uk", { 
      headers : new HttpHeaders({
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '72268418f2mshf67ae6786f12600p103d33jsnb8560086cc89'
      })
    }).subscribe(result => {
      this.weather = result;
      console.log(result);
    });
  }

}
