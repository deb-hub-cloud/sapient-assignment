import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(values: any, filterValue: any, propName: string): any {
    let resultArray = [];
    switch (filterValue) {
      case "All Data":
        resultArray = values;
        break;
      case 'Over 1000':
        resultArray = values.filter((value: any) =>
          value[propName] > 1000
        );
        break;
      default:
        const rangeArray = filterValue.split("-");
        resultArray = values.filter((value: any) =>
          value[propName] >= rangeArray[0] &&
          value[propName] <= rangeArray[1]
        );
        break;
    }
    return resultArray;
  }

}
