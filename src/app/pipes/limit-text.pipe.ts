import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const limit = args ? args : 50;
    const textLength = value.length;
    return textLength > limit ? `${value.slice(0, limit)}...` :  value;
  }

}
