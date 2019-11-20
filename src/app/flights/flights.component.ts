/** Angular **/
import { Component, OnInit } from '@angular/core';
import {FlightData} from '../ISearchData';
import {FlightService} from '../flight.service';
import {Observable} from 'rxjs';

//NgxSpinner
import { NgxSpinnerService } from "ngx-spinner";

/******************************************************************************/
/******************************************************************************/

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass']
})
export class FlightsComponent implements OnInit {
public flights$: Observable<Array<FlightData>> ;

  constructor(private flightService:FlightService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.flights$=this.flightService.getdata();
    this.spinner.show();

    setTimeout(() => {

      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 7000);

     }

  }
