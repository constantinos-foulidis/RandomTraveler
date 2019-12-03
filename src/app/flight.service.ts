/** Angular **/
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';

/** Data-Model **/
import {FlightData} from './ISearchData';



/******************************************************************************/
/******************************************************************************/

@Injectable({
  providedIn: 'root'
})

export class FlightService {
    // URL to web api
    private BaseUrl: string = 'https://api.skypicker.com/flights';
  constructor(private http: HttpClient) { }
  /**Get flights
    obj => the form data user inserted
    **/
    public data$ : Observable<FlightData[]>;
  getFlights(obj): Observable<FlightData[]> {
   console.log(obj);
      this.data$ = this.http.get<FlightData[]>(this.BaseUrl,{
      responseType:'json',
        params:{
          fly_from: obj.flyName,
          price_from:'1',
          price_to:obj.budgetPrice,
          flight_type:obj.flyType,
          nights_in_dst_from:obj.dayRange[0],
          nights_in_dst_to:obj.dayRange[1],
          partner:'picky',
          sort:'price'
          }
        }

    ).pipe(
      catchError(this.handleError)
    );

     return this.data$;
 }
 /**Send data
   passing data to handler service
   **/


 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
