import { createInjectableType } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { FOO_BAR_TOKEN } from 'src/app/constants/tokens';
import { AdditionService } from 'src/app/services/addition.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

@Component({
  selector: 'app-stam',
  templateUrl: './stam.component.html',
  styleUrls: ['./stam.component.css']
})
export class StamComponent {
  constructor(
    protected addition: AdditionService, 
    protected wrongAddition: WrongAdditionService, 
    @Inject(FOO_BAR_TOKEN) protected fooBar: number[]
  ){}

}
