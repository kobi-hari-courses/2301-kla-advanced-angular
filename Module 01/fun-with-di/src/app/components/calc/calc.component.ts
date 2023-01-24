import { Component, Inject } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
  providers: []
})
export class CalcComponent {
  result: number = 0;

  constructor(protected additionService: AdditionService){}

  calculate(a: number, b: number) {
    this.result = this.additionService.add(a, b);
  }
}
