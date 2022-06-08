import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-start-destination',
  templateUrl: './start-destination.component.html',
  styleUrls: ['./start-destination.component.scss']
})
export class StartDestinationComponent implements OnInit {


  selectedStart = 'Start'
  selectedDestination = 'Destination'

  startCities = ["Katowice", "Piekary Śląskie"];
  destinationCities = ["Londyn", "Nowy Yo", "Kingstone"];

  constructor() { }

  ngOnInit(): void {
    
  }

  onSelectedStartCity(city: string) : void {
    this.selectedStart = city;
  }

  onSelectedDestinationCity(city: string) : void {
    this.selectedDestination = city;
  }
}
