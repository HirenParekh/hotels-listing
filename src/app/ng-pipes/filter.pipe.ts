import {PipeTransform, Pipe} from "@angular/core";
/**
 * Created by Hiren on 06-03-2017.
 */
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], fields: string[], value: string,result:{searchCount:number,totalCount:number}) {
    if (!items)
      return [];
    if (!value)
      value = "";
    result.searchCount = 0;
    result.totalCount = 0;
    result.totalCount = items.length;
    return items.filter(
      currItem => {
        let flag: boolean;
        fields.forEach(field => {
          if (currItem.hasOwnProperty(field)) {
            if (currItem[field] && (currItem[field].toLowerCase().indexOf(value.toLowerCase()) > -1)) {
              flag = true;
              result.searchCount++;
              return;
            }
          }
        });
        return flag;
      });
  }
}
