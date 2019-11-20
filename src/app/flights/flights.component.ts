/** Angular **/
import { Component, OnInit } from '@angular/core';
import {FlightData} from '../ISearchData';
import {FlightService} from '../flight.service';
import {Observable} from 'rxjs';

/******************************************************************************/
/******************************************************************************/

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass']
})
export class FlightsComponent implements OnInit {
public flights$: Observable<Array<FlightData>> ;

  constructor(private flightService:FlightService) { }

  ngOnInit() {
     this.flights$=this.flightService.getdata();
     }

  }
