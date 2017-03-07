import {Component, OnInit} from "@angular/core";
import {HotelService} from "../services/hotel.service";
import {Hotel} from "../models/hotel.model";
/**
 * Created by Hiren on 06-03-2017.
 */
@Component({
  selector: 'hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.css']
})
export class HotelsPageComponent implements OnInit {

  hotels:Hotel[];

  constructor(private hotelService:HotelService) {

  }

  ngOnInit() {
    this.hotelService.getHotels()
      .subscribe(hotels => {
        this.hotels = hotels;
        console.log("Hotels => ", hotels);
      });
  }
}
