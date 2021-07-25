import {Component, OnInit} from '@angular/core';
import {LeagueService} from '../service/league.service';
import {CalculateResultsService} from '../service/calculate-results.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss']
})
export class StandingComponent implements OnInit{
  headers = [{title: 'POS', colValue: 'position'},
    {title: 'Team', colValue: 'name'},
    {title: 'PLD'},
    {title: 'W'},
    {title: 'D'},
    {title: 'L'},
    {title: 'PTS', colValue: 'point'}];
  resData =[];
  constructor(private service: LeagueService, private calculateResult: CalculateResultsService) {
  }
  ngOnInit() {
    this.service.leagues.subscribe((response) => {
      let flatMap = (a, fn) => [].concat(...a.map(fn));
      var results = flatMap(response, g => {
        if (g.homeScore === null || g.awayScore === null)
          return [];
        if (g.homeScore > g.awayScore){
          return [
            {id: g.id, name: g.homeTeam, point: 3, r: 'win', noOfPlayed:0 },
            {id: g.id, name: g.awayTeam, point: 0, r: 'loss', noOfPlayed: 0},
          ];
        }
        if (g.homeScore < g.awayScore){
          return [
            {id: g.id, name: g.homeTeam, point: 0, r: 'loss', noOfPlayed: 0},
            {id: g.id, name: g.awayTeam, point: 3, r: 'win', noOfPlayed: 0},
          ];
        }
        if (g.homeScore === g.awayScore){
          return [
            {id: g.id, name: g.homeTeam, point: 1, r: 'draw', noOfPlayed: 0},
            {id: g.id, name: g.awayTeam, point: 1, r: 'draw', noOfPlayed: 0},
          ];
        }
      });
      const countPlayed = (input) => {
        var arr = input, obj = {};
        for (var i = 0; i < arr.length; i++) {
          if (!obj[arr[i].name]) {
            obj[arr[i].name] = 1;
          } else if (obj[arr[i].name]) {
            obj[arr[i].name] += 1;
          }
        }
        return obj;
      };
      const pointsCalculate = (array, name) => {
        var points =  array.filter(i => i.name === name).reduce((a, b) => a + b.point, 0);
        return points;
      };
      var unique = [];
      results.reduce((m, d) => {
        let e = m[d.name] || {};
        e[d.r] = (e[d.r] || 0) + 1;
        unique.push({name: d.name, match: e, playGames: countPlayed(results)[d.name], point: pointsCalculate(results, d.name)});
        return Object.assign(m, {[d.name]:e});
      }, {});
      this.sortArray(unique);
      unique.sort(function (a, b) {
        return Number(b.point) - Number(a.point);
      });
      var finalResult = this.uniqueArray(unique).map((mapDat, ind)=>{
        return {
          position: ind+1,
          name: mapDat.name,
          playGames: mapDat.playGames || 0,
          win: mapDat?.match?.win || 0,
          draw: mapDat?.match?.draw || 0,
          loss: mapDat?.match?.loss || 0,
          point: mapDat?.point
        }
      })
      this.resData = finalResult;
    });
  }
  uniqueArray(array){
    var a = array.concat();
    for(var i=0; i<a.length; i++) {
      for(var j=i+1; j<a.length; j++) {
        if(a[i].name === a[j].name){
          a.splice(j--, 1);
        }
      }
    }

    return a;
  }
  sortArray(array){
    array.sort(function(a, b) {
      if ( a.point <  a.point) {
        return -1;
      }
      if ( a.point >  a.point) {
        return 1;
      }
      //must be equal
      return 0;
    });
  }

}
