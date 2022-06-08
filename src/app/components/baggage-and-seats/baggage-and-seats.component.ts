import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baggage-and-seats',
  templateUrl: './baggage-and-seats.component.html',
  styleUrls: ['./baggage-and-seats.component.scss']
})
export class BaggageAndSeatsComponent implements OnInit {
  selectedBaggage = 'large'
  baggages = ['small', 'medium', 'large']

  @Input() seats! : Array<number>;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedBaggage(baggage: string) : void {
    this.selectedBaggage = baggage;
  }
}
