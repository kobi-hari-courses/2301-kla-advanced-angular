import { Directive, EmbeddedViewRef, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';

export interface RepeatContext {
  $implicit: number;
  first: boolean;
}

@Directive({
  selector: '[myRepeat]'
})
export class RepeatDirective {
  private _count: number = 0;
  private _startWith: number = 1;
  private _skip: number = 1;

  @Input('myRepeat')
  get count(): number { return this._count }
  set count(value: number) {
    console.log('myRepeat changed');
    this._count = value;
    this.invalidate();
  }

  @Input('myRepeatStartWith')
  get startWith(): number { return this._startWith }
  set startWith(value: number) {
    this._startWith = value;
    this.invalidate();
  }

  @Input('myRepeatSkip')
  get skip(): number { return this._skip }
  set skip(value: number) {
    this._skip = value;
    this.invalidate();
  }


  invalidate() {
    if (this.template !== null) {
      // if there are too many views
      while (this.vcr.length > this._count) {
        this.vcr.remove(this.vcr.length - 1);
      }

      // if there are too few items
      while (this.vcr.length < this._count) {
        this.vcr.createEmbeddedView(this.template);
      }

      for (let i = 0; i < this._count; i++) {
        const view = this.vcr.get(i) as EmbeddedViewRef<RepeatContext>;
        view.context = {
          $implicit: (i * this._skip) + this._startWith, 
          first: i === 0
        }
      }
  
    } else {
      this.vcr.clear();
    }
  }

  constructor(
    @Optional() private template: TemplateRef<RepeatContext> | null,
    private vcr: ViewContainerRef
  ) {
    if (this.template === null) {
      throw "myRepeat must be placed on template or be used as *myRepeat";
    }

  }

}
