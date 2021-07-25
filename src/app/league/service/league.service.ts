import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {LeagueClass} from '../interface/league-class';
import {leagueMockData} from '../../mock-data/league-mock';


@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  public leagues = new BehaviorSubject<LeagueClass[]>([]);
  public league = new BehaviorSubject<LeagueClass>(null);

  constructor() {
    this.getGamesFromLocalStorage();
  }

  addNewResult(data) {
    this.leagues.next([...this.leagues.getValue(), data]);
    this.updateLocalStorage();
  }

  viewDetails(id) {
    this.league.next(this.leagues.getValue().find(game => game.id == id));
    console.log(this.leagues, id);
  }

  updateResult(data) {
    this.leagues.next(this.leagues.getValue().map(item => item.id === data.id ? data : item));
    this.updateLocalStorage();
  }

  // public addSuggestedGames = (): void => {
  //   this.games$.next(this.gamesSuggested);
  //   this.updateLocalStorage();
  // }


  private getGamesFromLocalStorage = (): void => {
    this.leagues.next(leagueMockData as any);
  }

  private updateLocalStorage = (): void => {
    // sessionStorage.setItem('indie-games', JSON.stringify(this.games$.getValue()));
  }


}
