import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlankComponent } from './components/blank/blank.component';
import { RepeaterComponent } from './components/repeater/repeater.component';
import { StamDirective } from './directives/stam.directive';
import { IfDirective } from './directives/if.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { StudentPresenterComponent } from './components/student-presenter/student-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    RepeaterComponent,
    StamDirective,
    IfDirective,
    RepeatDirective,
    StudentPresenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
