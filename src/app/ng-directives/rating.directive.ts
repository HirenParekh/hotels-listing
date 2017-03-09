import {Directive, ElementRef, Input} from "@angular/core";
/**
 * Created by Hiren on 09-03-2017.
 */

@Directive({
  selector: '[rating]'
})
export class RatingDirective {
  private _ratingValue:number;
  @Input('rating')
  set ratingValue(value:number){
    this._ratingValue = value;
    this.renderRating();
  }

  constructor(private el:ElementRef) {
  }

  renderRating() {
    let value = this._ratingValue;
    for (let i = 5; i > 0; i--) {
      if (value > 0) {
        this.el.nativeElement.innerHTML += `<span style="color:#ffd700">★</span>`;
      }
      else{
        this.el.nativeElement.innerHTML += `<span style="color:#bbbbbb">★</span>`;
      }
      value--;
    }
  }
}
