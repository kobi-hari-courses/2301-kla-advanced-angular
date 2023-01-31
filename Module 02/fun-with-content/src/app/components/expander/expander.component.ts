import { AfterContentInit, Component, ContentChild, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ExpanderToggleDirective } from './expander-toggle.directive';
import { ExpanderToggleComponent } from './expander-toggle/expander-toggle.component';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements AfterContentInit, OnInit {
  @ContentChild(ExpanderToggleDirective)
  expanderToggle: ExpanderToggleDirective | undefined = undefined;

  isOpen: boolean = false;

  toggleFound: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {
    console.log('constructor, content = ', this.expanderToggle);
  }

  ngOnInit(): void {
    console.log('init, content = ', this.expanderToggle);
  }

  ngAfterContentInit(): void {
    this.toggleFound = Boolean(this.expanderToggle);
    console.log('toggle found = ', this.toggleFound);
  }

}
