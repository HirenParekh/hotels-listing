import {Component, Input} from "@angular/core";
import {Hotel} from "../../models/hotel.model";
/**
 * Created by Hiren on 07-03-2017.
 */

@Component({
  selector:'hotel',
  templateUrl:'./hotel.component.html',
  styleUrls:['./hotel.component.css']
})
export class HotelComponent{
  @Input()
  hotel:Hotel;
  isExpanded:boolean;
  selected:boolean;
  toggleSelection(){
    this.selected = !this.selected;
  }
  showMoreInfo(){
    this.isExpanded = !this.isExpanded;
  }
}
