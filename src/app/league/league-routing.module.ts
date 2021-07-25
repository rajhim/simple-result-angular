import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StandingComponent} from './standing/standing.component';
import {ResultComponent} from './result/result.component';
import {NewComponent} from './new/new.component';

const routes: Routes = [
  {
    path: 'standing',
   component: StandingComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
  {
    path: 'edit/:id',
    component: NewComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
