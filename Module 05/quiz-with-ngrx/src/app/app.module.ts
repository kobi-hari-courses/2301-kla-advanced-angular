import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot(), 
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
