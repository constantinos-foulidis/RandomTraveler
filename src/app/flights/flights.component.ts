/** Angular **/
import { Component, OnInit } from '@angular/core';
import {FlightData} from '../ISearchData';
import {FlightService} from '../flight.service';
import {Observable} from 'rxjs';
import {HandleDataService} from '../handle-data.service';

/******************************************************************************/
/******************************************************************************/

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass']
})
export class FlightsComponent implements OnInit {
public flights$: Observable<Array<FlightData>> ;

  constructor(private flightService:FlightService,private handleDataService: HandleDataService) { }

  ngOnInit() {
     this.flights$=this.handleDataService.getData();
     }

  }
