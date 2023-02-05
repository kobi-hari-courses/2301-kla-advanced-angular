import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnDestroy {
  @Input()
  index = 0;

  @Input()
  color: string = 'red';

  constructor() {
    console.log('Blank Component Created');
  }

  ngOnDestroy(): void {
    console.log('Blank Component Destroyed');
  }

}
