import { Component } from '@angular/core';
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
    protected wrongAddition: WrongAdditionService
  ){}

}
