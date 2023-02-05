import { Directive, ElementRef, OnInit, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { __setFunctionName } from 'tslib';
import { BlankComponent } from '../components/blank/blank.component';

@Directive({
  selector: '[appStam]'
})
export class StamDirective implements OnInit {

  constructor(
    private elem: ElementRef, 
    private vcr: ViewContainerRef, 
    @Optional() private template: TemplateRef<any> | null) {
    console.log('Stam Directive Created', this.elem, this.vcr, this.template);
  }

  ngOnInit(): void {
    if (this.template !== null) {
      const v1 = this.vcr.createEmbeddedView(this.template);
      const v2 = this.vcr.createComponent(BlankComponent);

      setTimeout(() => {
        v2.instance.color = 'green';
      }, 2000);


      setTimeout(() => {
        this.vcr.clear();   
      }, 30000);

    }
  }

}
