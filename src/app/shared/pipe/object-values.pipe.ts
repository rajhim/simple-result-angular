import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectValuesPipe'
})
export class ObjectValuesPipe implements PipeTransform {
  transform(obj: any) {
    let result = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }
}
