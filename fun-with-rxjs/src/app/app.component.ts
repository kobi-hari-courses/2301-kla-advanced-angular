import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, of, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showReader = true;
  toggle() {
    this.showReader = !this.showReader;
  }


  createObserver(id: string): Observer<number> {
    return {
      next: (val) => console.log(`observer ${id} next ${val}`), 
      complete: () => console.log(`observer ${id} complete`), 
      error: (err) => console.log(`observer ${id} error ${err}`)
    }
  }

  createOfObservable(): Observable<number> {
    return of(42, 100);
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createTimerObservable(): Observable<number> {
    return timer(2000, 500);
  }

  createCustomObservable(): Observable<number> {
    return new Observable(observer => {
      observer.next(42);

      setTimeout(() => observer.next(100), 2000);
      setTimeout(() => observer.next(200), 4000);
      setTimeout(() => observer.next(300), 6000);
      setTimeout(() => observer.next(400), 8000);
      setTimeout(() => observer.complete(), 10000);
      setTimeout(() => observer.next(500), 12000);

    })
  }

  // createCustomHOTObservable
  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(42);

    setTimeout(() => subject.next(100), 2000);
    setTimeout(() => subject.next(200), 4000);
    setTimeout(() => subject.next(300), 6000);
    setTimeout(() => subject.next(400), 8000);
    setTimeout(() => subject.complete(), 10000);
    setTimeout(() => subject.next(500), 12000);

    return subject;
  }

    // createCustomHOTObservable
    createCustomBehaviorSubject(): Observable<number> {
      const subject = new BehaviorSubject<number>(42);
    
      setTimeout(() => subject.next(100), 2000);
      setTimeout(() => subject.next(200), 4000);
      setTimeout(() => subject.next(300), 6000);
      setTimeout(() => subject.next(400), 8000);
      setTimeout(() => subject.complete(), 10000);
      setTimeout(() => subject.next(500), 12000);
  
      return subject;
    }
  

  go() {
    const observer1 = this.createObserver('A');
    const observer2 = this.createObserver('B');

    const observable = this.createCustomBehaviorSubject();

    observable.subscribe(observer1);

    setTimeout(() => observable.subscribe(observer2), 2500);
  }
}
