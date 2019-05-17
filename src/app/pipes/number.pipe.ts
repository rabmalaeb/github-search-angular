import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  private THOUSANDS_SEPARATOR: string;

  constructor() {
    this.THOUSANDS_SEPARATOR = ',';
  }

  /**
   * used in tests
   */
  getThousandsSeperator() {
    return this.THOUSANDS_SEPARATOR;
  }

  transform(value: any): string {
    return value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
  }

  parse(value: string): string {
    return value.replace(new RegExp(this.THOUSANDS_SEPARATOR, 'g'), '');
  }
}
