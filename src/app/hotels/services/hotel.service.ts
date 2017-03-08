import {Injectable} from "@angular/core";
import {Hotel} from "../models/hotel.model";
import {Observable} from "rxjs/Rx";
/**
 * Created by Hiren on 06-03-2017.
 */
@Injectable()
export class HotelService {
  private _hotels:Hotel[] = [
    {
      name: "ABC",
      star: 4,
      rooms: [
        {name: "Deluxe", price: 25000, services: ['Break fast', 'Lunch', 'Dinner']},
        {name: "Regular", price: 10000, services: []},
        {name: "Semi Deluxe", price: 15000, services: ['Break fast']},
        {name: "Spacial", price: 60000, services: ['Break fast', 'Lunch']},
        {name: "VIP", price: 45000, services: ['Break fast', 'Lunch', 'Dinner', 'Disco', 'Pool']}
      ]
    },
    {
      name: "JKL",
      star: 3,
      rooms: [
        {name: "Regular", price: 10000, services: []},
        {name: "Spacial", price: 60000, services: ['Break fast', 'Lunch']}
      ]
    },
    {
      name: "PQR",
      star: 5,
      rooms: [
        {name: "Semi Deluxe", price: 15000, services: ['Break fast']},
        {name: "Spacial", price: 60000, services: ['Break fast', 'Lunch']}
      ]
    },
    {
      name: "LMN",
      star: 2,
      rooms: [
        {name: "Semi Deluxe", price: 15000, services: ['Break fast']},
        {name: "Spacial", price: 60000, services: ['Break fast', 'Lunch']},
        {name: "VIP", price: 45000, services: ['Break fast', 'Lunch', 'Dinner', 'Disco', 'Pool']},
        {name: "Deluxe", price: 25000, services: ['Break fast', 'Lunch', 'Dinner']},
        {name: "Regular", price: 10000, services: []}
      ]
    },
    {
      name: "XYZ",
      star: 1,
      rooms: [
        {name: "Spacial", price: 60000, services: ['Break fast', 'Lunch']}
      ]
    }
  ];

  getHotels():Observable<Hotel[]> {
    return Observable.create(
      observer => observer.next(this._hotels)
    ).delay(1000);
  }
}
