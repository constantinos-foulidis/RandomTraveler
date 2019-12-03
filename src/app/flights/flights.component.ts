/** Angular **/
import { Component, OnInit } from '@angular/core';
import {FlightData} from '../ISearchData';
import {MatCardModule} from '@angular/material/card';
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
public showFiller:boolean = false;
  constructor(private handleDataService: HandleDataService) { }

  ngOnInit() {
     this.flights$=this.handleDataService.getData();
     }
  country(){
    console.log(this.flights$);
  }
  }
