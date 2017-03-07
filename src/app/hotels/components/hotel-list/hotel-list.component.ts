import {Component, Input} from "@angular/core";
import {Hotel} from "../../models/hotel.model";
/**
 * Created by Hiren on 07-03-2017.
 */

@Component({
  selector: 'hotel-list',
  templateUrl: 'hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  @Input()
  hotels:Hotel[];
}
