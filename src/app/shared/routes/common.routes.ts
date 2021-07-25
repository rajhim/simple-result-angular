import {Routes} from '@angular/router';

export const Common_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../league/league.module').then(m => m.LeagueModule),
  }

];
