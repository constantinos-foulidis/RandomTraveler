import { Injectable } from '@angular/core';
/** Data-Model **/
import {FlightData} from './ISearchData';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
 //this variable keeps data from api
  public handledata$ : Observable<FlightData[]>;

  constructor() { }

//set data from api
  setData(data: Observable<FlightData[]>):Observable<FlightData[]>{
      this.handledata$ = data;
  }

//get data to show to component
  getData():Observable<FlightData[]>{
    return this.handledata$;
  }
}
