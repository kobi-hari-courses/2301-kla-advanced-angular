import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class AdditionService {

  id: number;

  constructor(private historyService: HistoryService) { 
    console.log('Creating new Addition Service');
    this.id = Math.ceil((Math.random() * 100000));
  }

  add(a: number, b:number): number {
    this.historyService.record(`adding ${a} + ${b}`);
    return a + b;
  }
}
