import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from './models/question.model';
import { QuizActions, QuizSelectors } from './redux/quiz.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  question$!: Observable<Question>;
  quizDone$ = this.store.select(QuizSelectors.quizDone);

  constructor(private store: Store<any>){}


  ngOnInit(): void {
    this.question$ = this.store.select(QuizSelectors.currentQuestion);
  }

  onAnswer(index: number) {
    const action = QuizActions.answerCurrentQuestion({index: index});
    this.store.dispatch(action);
  }

  onReset() {
    const action = QuizActions.reset();
    this.store.dispatch(action);    
  }
  
}
