import {PipeTransform, Pipe} from "@angular/core";
/**
 * Created by Hiren on 06-03-2017.
 */
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], fields: string[], value: string) {
    if (!items)
      return [];
    if (!value)
      value = "";
    return items.filter(
      currItem => {
        let flag: boolean;
        fields.forEach(field => {
          if (currItem.hasOwnProperty(field)) {
            if (currItem[field] && (currItem[field].toLowerCase().indexOf(value.toLowerCase()) > -1)) {
              flag = true;
              return;
            }
          }
        });
        return flag;
      });
  }
}
