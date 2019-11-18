import { Component, OnInit } from '@angular/core';
import {FlightData} from '../Search-data';
import {FlightService} from '../flight.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass']
})
export class FlightsComponent implements OnInit {
public flights$: Observable<FlightData[]>
  constructor(private flightService:FlightService) { }

  ngOnInit() {
    this.flights$ = this.flightService.getFlights()
  }

}
