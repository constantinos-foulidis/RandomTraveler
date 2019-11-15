import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],

})
export class SearchComponent implements OnInit {

  constructor() { }
//values for simple slader
Budgetvalue: number = 0;
 Budgetoptions: Options = {
   floor: 0,
   ceil: 3000,
    translate: (value: number, label: LabelType): string => {
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

}
