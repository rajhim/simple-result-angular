import { NgModule } from '@angular/core';
import { GenericTableComponent } from './generic-table.component';
import {ObjectValuesPipe} from './pipe/object-values.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RowColorsPipe} from './pipe/rowColors.pipe';
import {SortDirective} from './directive/sort.directive';



@NgModule({
  declarations: [GenericTableComponent, ObjectValuesPipe, RowColorsPipe, SortDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [GenericTableComponent, ObjectValuesPipe, RowColorsPipe, SortDirective]
})
export class GenericTableModule { }
