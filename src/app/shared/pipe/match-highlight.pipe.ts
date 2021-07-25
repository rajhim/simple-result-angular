import {Input, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'matchHighLightPipe',
  pure: false
})
export class MatchHighlightPipe implements PipeTransform {

  constructor() {}

  transform(value: any, args): string {
    if(args == 'homeScore'){
      if(value.homeScore > value.awayScore){
        return 'won-color';
      }else if(value.homeScore < value.awayScore){
        return 'loss-color';
      }else{
        return;
      }
    }
    if(args == 'awayScore') {
      if (value.homeScore < value.awayScore) {
        return 'won-color';
      } else if (value.homeScore > value.awayScore) {
        return 'loss-color';
      } else {
        return;
      }
    }

  }
}


