import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
/** Data-Model **/
import {FlightData} from './ISearchData';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
 //this variable keeps data from api
  public handledata$ : Observable<FlightData[]>;

  constructor(private router: Router) { }

//set data from api
  setData(data: FlightData[]){
    this.router.navigate(['/flights']);
      this.handledata$ = of(data);
  }

//get data to show to component
  getData():Observable<FlightData[]>{

    return this.handledata$;
  }
}
