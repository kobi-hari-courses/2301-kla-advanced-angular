import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]', 
  exportAs: 'lowlight'
})
export class HighlightDirective implements OnInit {

  @Input('highlight')
  color: string = 'yellow';

  @Output()
  vansihed = new EventEmitter<string>();

  @HostBinding('style.background-color')
  bg: string = this.color;

  @HostListener('click')
  onChangeColor() {
    this._counter++;

    if (this._counter === 6) {
      this.vansihed.emit(this.bg);
    }

    if (this._counter > 5) {
      this.bg = 'transparent';
    } else {
      this.bg = (this._counter % 2 === 0)
      ? this.color
      : 'lime';
    }
  }

  private _counter: number = 0;

  constructor(
    host: ElementRef, 
    renderer: Renderer2
    ) { 
    // host.nativeElement.style.backgroundColor = 'yellow';

    // renderer.setStyle(host.nativeElement, 'background-color', 'pink');

    // setInterval(() => this.onChangeColor(), 2000);
  }

  ngOnInit(): void {
    this.bg = this.color;

    console.log('Highlight directive, color = ', this.color);
  }

}
