import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NewComponent} from './new/new.component';
import {ResultComponent} from './result/result.component';
import {StandingComponent} from './standing/standing.component';
import {LeagueRoutingModule} from './league-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    NewComponent,
    ResultComponent,
    StandingComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
})
export class LeagueModule { }
