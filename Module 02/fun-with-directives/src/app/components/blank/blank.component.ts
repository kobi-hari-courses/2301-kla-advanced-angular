import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  @Input()
  color: string = 'purple';

  ngOnInit(): void {
    console.log('blank component, color = ', this.color);
  }

}
