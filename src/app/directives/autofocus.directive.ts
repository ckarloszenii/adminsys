import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})

export class AutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
      setTimeout(() => { this.el.nativeElement.select(); }, 500); 
  }
  
}
