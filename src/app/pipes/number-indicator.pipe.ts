import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberIndicator'
})
export class NumberIndicatorPipe implements PipeTransform {


  transform(value: any, args?: any): any {
   if (value < 1000) {
    return value;
   }
   if (value >= 1000  && value <= 1000000) {
     return `${Math.floor(value / 1000)} K`;
   }
   if (value >= 1000000  && value <= 1000000000) {
     return `${Math.floor(value / 1000000)} M`;
   }
  }

}
