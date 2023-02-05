import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlankComponent } from './components/blank/blank.component';
import { RepeaterComponent } from './components/repeater/repeater.component';
import { StamDirective } from './directives/stam.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    RepeaterComponent,
    StamDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
