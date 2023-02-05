import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { EnglishComponent } from '../english/english.component';
import { HebrewComponent } from '../hebrew/hebrew.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnChanges, AfterViewInit {
  @Input()
  text: string = 'hello';

  @ViewChild('here', { read: ViewContainerRef})
  vcr: ViewContainerRef | null  = null;

  ngOnChanges(changes: SimpleChanges): void {
    this.invalidate();
  }
  ngAfterViewInit(): void {
    this.invalidate();
  }


  invalidate() {
    const firstChar = this.text.charAt(0).toUpperCase();
    let language: 'english' | 'hebrew' = 'hebrew';
    if ((firstChar >= 'A') && (firstChar <= 'Z')) language = 'english';

    let mySelectedComponent = (language === 'english') 
      ? EnglishComponent
      : HebrewComponent;

    this.vcr?.clear();
    this.vcr?.createComponent(mySelectedComponent);

  }

}
