import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberOnlyDirective {



  constructor(private el: ElementRef) {}
  regex = /^[0-9]+$/;

  @HostListener("keydown", ["$event"])


  onKeyDown(event: KeyboardEvent) {
    var match;
    if(event){
      if(event.key){
        var e = event.key.toString();
        match = e.match(this.regex)
      }
      if ( match || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190 || event.keyCode == 110) {
        // Allow normal operation
      } else {
        // Prevent the rest
        event.preventDefault();
      }
    }

  }

}
