import {Injectable} from '@angular/core';
import {ResultsInterface} from '../interface/league-class';

enum Outcome{HomeWon, Draw, AwayWon};

@Injectable({
  providedIn: 'root'
})
export class CalculateResultsService {
  list = [];
  points = 0;
  gamePlayed = 0;
  win = 0;
  loss = 0;
  drawn = 0;
  homeTeam;
  awayTeam;
  result = [];
  setGame(team, i){
    this.setGoals(team[i], team[i].homeScore, team[i].awayScore);
  }
  setGoals(team, homeScore, awayScore) {
    var outcome;
    if (homeScore > awayScore) {
      outcome = Outcome.HomeWon;
    } else if (homeScore < awayScore) {
      outcome = Outcome.AwayWon;
    } else {
      outcome = Outcome.Draw;
    }
    // console.log(team, outcome, homeScore, awayScore );

     this.setPointsFromGame(team, outcome);
  }
  setPointsFromGame(team, outcome){
    if(outcome == Outcome.HomeWon){
      this.incrementPoints(3);
      this.getWinPoint();
      this.getLossPoint();
    }else if(outcome == Outcome.Draw){
      this.incrementPoints(1);
      this.getDrawPoint();
    }else{
      this.incrementPoints(3);
      this.getLossPoint();
      this.getWinPoint();
    }

    console.log(team, this.points, this.win, this.loss, this.drawn, this.gamePlayed);
    this.getResultList(team);
  }
  getResultList(team){
    this.result.push({
      id: team.id,
      name: team.homeTeam,
      played: this.gamePlayed,
      wins: this.win,
      draw: this.drawn,
      loss: this.loss,
      points: this.points
    });
    console.log(this.result);
  }

  incrementPoints(points)
  {
    this.points += points;
  }
  incrementNumOfGames()
  {
    this.gamePlayed++;
  }
  getWinPoint() {
    this.win++;
  }
  getLossPoint() {
    this.loss++;
  }
  getDrawPoint() {
    this.drawn++;
  }

}
