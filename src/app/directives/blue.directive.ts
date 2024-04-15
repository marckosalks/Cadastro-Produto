import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlue]',
  standalone: true
})
export class BlueDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = "#5eb2e3"
  };
}
