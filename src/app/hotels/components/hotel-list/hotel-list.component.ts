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

  searchStr:string = "";
  searchResultInfo:{searchCount:number,totalCount:number} = {searchCount:0,totalCount:0};

  @Input()
  hotels:Hotel[];

}
