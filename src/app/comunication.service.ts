import { Injectable ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
data: Array<string>;
receivedFilter:EventEmitter<Array<string>>;
  constructor() {
  this.receivedFilter = new EventEmitter<Array<string>>();
 }
 raiseEvent(data:  Array<string>): void {
        this.data = data;
        this.receivedFilter.emit(data);
    }
}
