import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'samoloty';

  numberOfPassengers! : Array<number>;
  showFlightDetails = false;

  onContinue() : void{
    console.log("tu kiedys bedzie logowanie sie ")
    this.showFlightDetails = true;
  }
}
