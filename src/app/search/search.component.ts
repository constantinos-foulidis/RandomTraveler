import { Component, OnInit, HostBinding } from '@angular/core';
import {Options} from 'ng5-slider';
import {LabelType} from 'ng5-slider';
import {FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],

})
export class SearchComponent implements OnInit {
  searchForm = this.fb.group({
      flyName: ['',Validators.required],
      budgetPrice: [''],
      dayRange: [''],
      flyType: ['',Validators.required],
    });
  constructor(private fb: FormBuilder) { }
//values for simple slader
Budgetvalue: number = 0;
 Budgetoptions: Options = {
   floor: 0,
   ceil: 3000,
    translate: (value: number): string => {
      return '$' + value;
    }
 };
  //values for range slider
  value: number = 1;
highValue: number = 10;
options: Options = {
  floor: 1,
  ceil: 30
};
  ngOnInit() {
  }


onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.searchForm.value);
}

}
