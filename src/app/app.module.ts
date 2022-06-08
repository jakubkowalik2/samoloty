import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateAndWeatherComponent } from './components/date-and-weather/date-and-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { StartDestinationComponent } from './components/start-destination/start-destination.component';
import { DateAndPassengersComponent } from './components/date-and-passengers/date-and-passengers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BaggageAndSeatsComponent } from './components/baggage-and-seats/baggage-and-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    DateAndWeatherComponent,
    StartDestinationComponent,
    DateAndPassengersComponent,
    BaggageAndSeatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
