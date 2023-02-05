import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class IfDirective implements OnChanges{

  @Input('myIf')
  myIf = false;

  // private _condition = false;

  // @Input('myIf')
  // get condition(): boolean { return this._condition;}
  // set condition(value: boolean) {
  //   this._condition = value;
  // }

  constructor(
    private template: TemplateRef<any>, 
    private vcr: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.invalidate();
  }

  invalidate() {
    if ((this.myIf === true) && (this.vcr.length === 0)) {
      this.vcr.createEmbeddedView(this.template);
      return;
    }

    if ((this.myIf === false) && (this.vcr.length > 0)) {
      this.vcr.clear();
    }
  }

}
