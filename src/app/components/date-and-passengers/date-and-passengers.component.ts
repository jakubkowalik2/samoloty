import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-and-passengers',
  templateUrl: './date-and-passengers.component.html',
  styleUrls: ['./date-and-passengers.component.scss']
})
export class DateAndPassengersComponent implements OnInit {
  dateOfFlight = new Date();
  numberOfPassengers = 1;
  @Output() numberOfPassengersChange = new EventEmitter<Array<number>>();

  bsConfig?: Partial<BsDatepickerConfig>;
  
  constructor() {
    this.bsConfig = Object.assign({}, { containerClass: "theme-dark-blue" });
 }

  ngOnInit(): void {
  }

  onPassengersChange() {
    console.log(this.numberOfPassengers);
    this.numberOfPassengersChange.emit(new Array<number>(this.numberOfPassengers));
  }

}
