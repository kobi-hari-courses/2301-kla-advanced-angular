import { Inject, Injectable } from '@angular/core';
import { NOW_TOKEN, PREFIX_TOKEN } from '../constants/tokens';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  records: string[] = [];

  constructor(
    @Inject(PREFIX_TOKEN) private prefix: string, 
    @Inject(NOW_TOKEN) private now: () => Date
    ) { }

  record(txt: string) {
    this.records.push(this.prefix + ' ' + txt + ' at ' + this.now().toTimeString());
    console.log(this.records);
  }
}
