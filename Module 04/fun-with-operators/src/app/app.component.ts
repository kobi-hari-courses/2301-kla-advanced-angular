import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, map, merge, mergeAll, Observable, of, switchAll } from 'rxjs';
import { Color } from './models/color.model';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result$!: Observable<Color[]>;
  search$ = new BehaviorSubject<string>('');
  isBusy$!: Observable<boolean>;

  constructor(private colorsService: ColorsService){}

  ngOnInit(): void {
    const res = this.search$.pipe(
      map(keyword => this.colorsService.search(keyword)), 
      switchAll()
    );

    this.result$ = res;

    const true$ = this.search$.pipe(map(_ => true));
    const false$ = this.result$.pipe(map(_ => false));
    this.isBusy$ = merge(true$, false$);
  }

}
