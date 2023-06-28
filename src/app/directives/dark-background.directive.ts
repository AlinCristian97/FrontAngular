import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkBackground]'
})
export class DarkBackgroundDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.elementRef.nativeElement, 'bg-dark');
    this.renderer.addClass(this.elementRef.nativeElement, 'text-light');
  }
}
