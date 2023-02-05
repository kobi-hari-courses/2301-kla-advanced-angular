import { AfterContentInit, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ItemTemplateDirective } from './item-template.directive';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent implements AfterContentInit {
  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';

  @Output()
  selection = new EventEmitter<string>();

  @ContentChild(ItemTemplateDirective)
  itemTemplateDirective: ItemTemplateDirective | null = null;

  onUserSelect(value: string) {
    this.selection.emit(value);
  }

  ngAfterContentInit(): void {
    console.log(this.itemTemplateDirective);
  }

}
