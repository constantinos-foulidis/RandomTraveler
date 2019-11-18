'use strict';

/** Angular **/
import {Component,HostBinding} from '@angular/core';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';
import {FlightData} from '../Search-data';
import {FlightService} from '../flight.service';


/** ng5-slider **/
import {Options, LabelType} from 'ng5-slider';

/******************************************************************************/
/******************************************************************************/
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],

})
export class SearchComponent {
  public searchForm: FormGroup = this.fb.group({
      flyName: ['',Validators.required],
      budgetPrice: [''],
      dayRange: [''],
      flyType: ['',Validators.required],
    });
  public data :FlightData [];

  constructor(private fb: FormBuilder,private flightService:FlightService) { }

  //values for range slider
  value: number = 1;
  highValue: number = 10;
  options: Options = {
    floor: 1,
    ceil: 30
  };



  /** The keep changing value of the budget slider. **/
  budgetvalue: number = 0;
  /** The default options of the budget slider. **/
  budgetoptions: Options = {
    floor: 0,
    ceil: 3000,
    translate: (value: number): string => `$${value}`,
 };

 onSubmit() {
   // TODO: Use EventEmitter with form value
   // TODO: Use EventEmitter with form value
   console.log(this.searchForm.value);
   var respones = this.flightService.getFlights(this.searchForm.value).
   subscribe( flights => {
     console.log(flights);
     this.data = flights;
   });

 };

}
