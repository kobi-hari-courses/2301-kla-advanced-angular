import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color')
  bg: string = 'cyan';

  @HostListener('click')
  onChangeColor() {
    if (this.bg === 'cyan') {
      this.bg = 'yellow';
    } else {
      this.bg = 'cyan';
    }
  }

  constructor(
    host: ElementRef, 
    renderer: Renderer2
    ) { 
    // host.nativeElement.style.backgroundColor = 'yellow';

    // renderer.setStyle(host.nativeElement, 'background-color', 'pink');

    // setInterval(() => this.onChangeColor(), 2000);


  }

}
