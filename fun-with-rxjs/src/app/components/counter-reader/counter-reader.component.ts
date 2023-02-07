import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit, OnDestroy {
  value: number = -1;
  sub: Subscription = new Subscription();

  constructor(private counterService: CounterService) { }


  ngOnInit(): void {
    this.sub.add(
      this.counterService.getValue().subscribe(val => {
        console.log('Counter changed to ', val);
        this.value = val
      }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
