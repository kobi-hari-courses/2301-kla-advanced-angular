import { Component, Input, TemplateRef } from '@angular/core';

export interface MyDataType {
  count: number;
  color: string;
}

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent {
  @Input()
  template: TemplateRef<MyDataType> | null = null;

}
