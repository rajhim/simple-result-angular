import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rowColorsPipe'
})
export class RowColorsPipe implements PipeTransform {
  transform(value: any): string {
    switch(value) {

      case 0: {
        return 'first-place';
      }

      case 1: {
        return 'second-place';
      }

      case 2: {
        return 'third-place';
      }

      case 22:
      case 23:
      case 24: {
        return 'relegation-place';
      }
    }
  }
}
