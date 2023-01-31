import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css'], 
})
export class ExpanderComponent {
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
