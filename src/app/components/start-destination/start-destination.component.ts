import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-start-destination',
  templateUrl: './start-destination.component.html',
  styleUrls: ['./start-destination.component.scss']
})
export class StartDestinationComponent implements OnInit {
  // @ViewChild(NgbDropdown, { static: true })
  // public dropdown: NgbDropdown;

  selectedStart = 'Start'
  selectedDestination = 'Destination'

  startCities = ["Katowice", "Piekary Śląskie"];
  destinationCities = ["Londyn", "Nowy Yo", "Kingstone"];

  constructor() { }

  ngOnInit(): void {
    
  }

  onSelectedStartCity(city: string) : void {
    console.log(city)
    this.selectedStart = city;
  }

  onSelectedDestinationCity(city: string) : void {
    console.log(city)
    this.selectedDestination = city;
  }


}
