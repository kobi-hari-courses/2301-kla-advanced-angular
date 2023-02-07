import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit {
  value$!: Observable<string>;

  stam = 5;

  constructor(
    private counterService: CounterService, 
    private changeDetector: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.value$ = this.counterService.getValue().pipe(
      filter(num => num % 2 === 0),
      map(num => `**${num}**`)
    );



    setTimeout(() => {
      this.stam = 42;
      console.log('Changing Stam to 42');
    }, 5000);

    setTimeout(() => {
      console.log('Detecting Changes');
      this.changeDetector.markForCheck();
    }, 8000);
  }


}
