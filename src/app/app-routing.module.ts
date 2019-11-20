import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {FlightsComponent} from './flights/flights.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SearchComponent },
   {path: 'flights', component: FlightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
