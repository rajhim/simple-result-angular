import {Directive, Input, Renderer2, ElementRef, HostListener, Output} from '@angular/core';
import {Sort} from '../model/sort-model';




@Directive({
  selector: '[sort]'
})
export class SortDirective {
  // sort: array list
  @Input() sort: Array<any>;
  // colValue: column key
  @Input() colValue;
  // order: asc | desc
  @Input() order = 'desc';
  // sortBoolean: show icon to sort
  @Input() sortBoolean = false;

  constructor(private elmRef: ElementRef,
              private renderer: Renderer2) { }

  // sortData: sorting data with click event;
  @HostListener("click")
  sortData() {
    if (this.colValue) {
      const sort = new Sort();
      if (this.order === "desc") {
        this.sort.sort(sort.startSort(this.colValue, this.order));
        this.order = "asc";
        this.renderer.addClass(this.elmRef.nativeElement, 'bi-sort-up');
        this.renderer.removeClass(this.elmRef.nativeElement, 'bi-sort-down');
      } else {
        this.sort.sort(sort.startSort(this.colValue, this.order));
        this.order = "desc";
        this.renderer.addClass(this.elmRef.nativeElement, 'bi-sort-down');
        this.renderer.removeClass(this.elmRef.nativeElement, 'bi-sort-up');
      }
    }
  }
}
