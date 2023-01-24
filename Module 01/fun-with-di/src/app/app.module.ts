import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';
import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { StamComponent } from './components/stam/stam.component';
import { FOO_BAR_TOKEN, NOW_TOKEN, PREFIX_TOKEN } from './constants/tokens';
import { SharedModule } from './shared/shared.module';
import { Shared2Module } from './shared/shared-2.module';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent,
    StamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    Shared2Module,
    SharedModule, 
  ],
  providers: [
    {
      provide: WrongAdditionService, 
      useClass: WrongAdditionService
    },
    {
      provide: AdditionService, 
      useExisting: WrongAdditionService
    }, 
    {
      provide: PREFIX_TOKEN, 
      useValue: 'INFO: '
    }, 
    {
      provide: NOW_TOKEN, 
      useValue: () => new Date()
    }, 
    {
      provide: FOO_BAR_TOKEN, 
      useFactory: () => 42, 
      multi: true
    }, 
    {
      provide: FOO_BAR_TOKEN, 
      useValue: 55, 
      multi: true
    }, 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
