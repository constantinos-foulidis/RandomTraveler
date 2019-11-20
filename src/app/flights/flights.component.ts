import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FlightData} from '../Search-data';
import {FlightService} from '../flight.service';
import {Observable} from 'rxjs';
import {ComunicationService} from '../comunication.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass']
})
export class FlightsComponent implements OnInit {
public flights: Observable<FlightData[]>
public data;
  constructor(private flightService:FlightService,private route: ActivatedRoute,private comunicationService:ComunicationService) { }

  ngOnInit() {

    this.comunicationService.receivedFilter.subscribe((param: Array<string>) => {
            this.data = param;
            console.log(param);
        this.flightService.getFlights(this.data);
        console.log(this.flights);
        });


  }

}
