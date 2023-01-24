import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';

@Injectable()
export class WrongAdditionService {

  id: number;

  constructor(private historyService: HistoryService) { 
    console.log('Creating new Wrong Addition Service');
    this.id = Math.ceil((Math.random() * 100000));
  }

  add(a: number, b:number): number {
    this.historyService.record(`wrongly adding ${a} + ${b}`);
    return a + b + 1;
  }
}
