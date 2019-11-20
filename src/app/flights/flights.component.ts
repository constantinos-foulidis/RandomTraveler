import { Component, OnInit } from '@angular/core';
import {FlightData} from '../Search-data';
import {FlightService} from '../flight.service';
import {Observable,of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
     ngOnDestroy(){
    console.log(this.flights$);
    }
  }
