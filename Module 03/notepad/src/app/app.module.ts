import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';
import { ItemTemplateDirective } from './components/string-selector/item-template.directive';
import { EnglishComponent } from './components/english/english.component';
import { HebrewComponent } from './components/hebrew/hebrew.component';
import { LanguageComponent } from './components/language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    StringSelectorComponent,
    ItemTemplateDirective,
    EnglishComponent,
    HebrewComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
