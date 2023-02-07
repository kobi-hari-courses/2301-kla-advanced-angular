import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _counter: number = 0;
  private _counter$ = new BehaviorSubject<number>(this._counter);

  increment() {
    this._counter++;
    this._counter$.next(this._counter);
  }

  decrement() {
    this._counter--;
    this._counter$.next(this._counter);

  }

  getValue(): Observable<number> {
    return this._counter$.asObservable();
  }


  constructor() { }
}
