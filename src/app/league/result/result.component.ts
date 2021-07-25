import {Component, OnInit} from '@angular/core';
import {LeagueService} from '../service/league.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit{
  results = [];
  constructor(private service: LeagueService, private router: Router) {
  }
  ngOnInit() {
    this.getResults();
  }

  getResults(){
    this.service.leagues.subscribe(data => {
      const groups = data.reduce((groups, game) => {
        if (!groups[game.date]) {
          groups[game.date] = [];
        }
        groups[game.date].push(game);
        return groups;
      }, {});
      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          games: groups[date]
        };
      });
      this.results = groupArrays;
    })
  }

  viewEdit(id){
    this.router.navigate(['/edit/' + id]);
  }


}
