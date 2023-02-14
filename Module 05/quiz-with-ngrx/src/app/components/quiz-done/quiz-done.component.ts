import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuizSelectors } from 'src/app/redux/quiz.types';

@Component({
  selector: 'app-quiz-done',
  templateUrl: './quiz-done.component.html',
  styleUrls: ['./quiz-done.component.css']
})
export class QuizDoneComponent {

  score$ = this.store.select(QuizSelectors.score);

  constructor(private store: Store<any>){}

}
