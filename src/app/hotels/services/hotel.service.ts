import {Injectable} from "@angular/core";
import {Hotel} from "../models/hotel.model";
import {Observable} from "rxjs/Rx";
/**
 * Created by Hiren on 06-03-2017.
 */
@Injectable()
export class HotelService {
  private _hotels:Hotel[] = [
    {name: "ABC", star: 4, rooms: [{name: "deluxe", price: 25000, services: ['Break fast','Lunch']}]}
  ];

  getHotels():Observable<Hotel[]> {
    return Observable.create(
      observer => observer.next(this._hotels)
    ).delay(1000);
  }
}
