import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';
import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { StamComponent } from './components/stam/stam.component';
import { NOW_TOKEN, PREFIX_TOKEN } from './constants/tokens';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent,
    StamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
