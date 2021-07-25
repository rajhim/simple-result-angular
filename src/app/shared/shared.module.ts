import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {GenericTableComponent} from './generic-component/generic-table/generic-table.component';
import {ObjectValuesPipe} from './pipe/object-values.pipe';
import {NumberOnlyDirective} from './directive/number-only.directive';
import {GenericTableModule} from '../../../projects/generic-table/src/lib/generic-table.module';
import {HttpClientModule} from '@angular/common/http';
import {MatchHighlightPipe} from './pipe/match-highlight.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GenericTableComponent,
    ObjectValuesPipe,
    NumberOnlyDirective,
    MatchHighlightPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GenericTableModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GenericTableComponent,
    ObjectValuesPipe,
    NumberOnlyDirective,
    GenericTableModule,
    MatchHighlightPipe
  ]
})
export class SharedModule { }
