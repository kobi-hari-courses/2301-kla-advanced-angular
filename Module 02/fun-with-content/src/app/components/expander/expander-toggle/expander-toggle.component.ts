import { Component, Optional } from '@angular/core';
import { ExpanderComponent } from '../expander.component';

@Component({
  selector: 'button[expander-toggle]',
  templateUrl: './expander-toggle.component.html',
  styleUrls: ['./expander-toggle.component.css']
})
export class ExpanderToggleComponent {
  constructor(@Optional() public expander: ExpanderComponent | null){}

}
