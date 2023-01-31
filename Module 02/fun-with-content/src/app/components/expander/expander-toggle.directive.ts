import { Directive, HostBinding, HostListener, Optional } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ExpanderComponent } from './expander.component';

@Directive({
  selector: 'button[expander-toggle]'
})
export class ExpanderToggleDirective {

  @HostListener('click')
  onClick() {
    this.expander?.toggle();
  }

  @HostBinding('style.outline')
  warningOutline = '';

  constructor(@Optional() private expander: ExpanderComponent | null) { 
    if (this.expander === null) {
      console.warn('You are using expander-toggle without an expander');
      this.warningOutline = '5px solid yellow';
    }      

  }

}
