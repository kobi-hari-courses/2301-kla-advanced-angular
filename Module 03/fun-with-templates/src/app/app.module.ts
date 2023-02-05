import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlankComponent } from './components/blank/blank.component';
import { RepeaterComponent } from './components/repeater/repeater.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    RepeaterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
