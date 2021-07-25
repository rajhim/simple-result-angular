export class LeagueClass {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}

export interface ResultsInterface {
  name: string;
  noOfPlayed: number;
  won: number;
  lost: number;
  drawn: number;
  points: number;
}
