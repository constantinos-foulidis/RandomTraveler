'use strict';

/** Angular **/
import {Component,OnDestroy} from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import {FlightService} from '../flight.service';
import {HandleDataService} from '../handle-data.service';
import {Subscription} from 'rxjs';


/** ng5-slider **/
import {Options} from 'ng5-slider';


/******************************************************************************/
/******************************************************************************/

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],

})
export class SearchComponent  implements OnDestroy{
  public searchForm: FormGroup = this.fb.group({
      flyName: ['',Validators.required],
      budgetPrice: [''],
      dayRange: [''],
      flyType: ['',Validators.required],
    });


  constructor(private fb: FormBuilder,private flightService:FlightService,private handleData : HandleDataService) { }

  //values for range slider
  value: number = 1;
  highValue: number = 10;
  options: Options = {
    floor: 1,
    ceil: 30
  };

  subscription:Subscription;

  /** The keep changing value of the budget slider. **/
  budgetvalue: number = 0;
  /** The default options of the budget slider. **/
  budgetoptions: Options = {
    floor: 0,
    ceil: 3000,
    translate: (value: number): string => `$${value}`,
 };

 onSubmit() {
   console.log(this.searchForm.value);
    this.subscription =  this.flightService.getFlights(this.searchForm.value).subscribe( data=> {

      console.log(data);
       this.handleData.setData(data);


    }

    );

 };
 ngOnDestroy() {
    // ...
    this.subscription.unsubscribe();
  }

}
