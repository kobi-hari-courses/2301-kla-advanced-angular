import { Directive, TemplateRef } from '@angular/core';
import { ItemTemplateContext } from './item-template.context';

@Directive({
  selector: '[itemTemplate]'
})
export class ItemTemplateDirective {

  constructor(
    public template: TemplateRef<ItemTemplateContext>
  ) { }

}
