import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { Answer } from 'src/app/models/answer.mode';
import { QuizSelectors } from 'src/app/quiz/redux/quiz.types';
import { ProgressItem, ProgressViewModel } from './progress.vm';

@Component({
  selector: 'quiz-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  vm$!: Observable<ProgressViewModel>;

  constructor(private store: Store<any>){}

  ngOnInit(): void {
    const count$ = this.store.select(QuizSelectors.questionsCount);
    const answers$ = this.store.select(QuizSelectors.allAnswers);

    this.vm$ = combineLatest([count$, answers$]).pipe(
      map(pair => this.createViewModel(...pair))
    )
  }  



  private createViewModel(count: number, answers: Answer[]): ProgressViewModel {
    const empty = Array(count).fill(null);

    return empty.map((item, index) => answers.length > index 
      ? this.isCorrectToProgressItem(answers[index].isCorrect)
      : 'Empty'
      );
  }

  private isCorrectToProgressItem(isCorrect: boolean): ProgressItem {
    return isCorrect ? 'Correct' : 'Wrong';
  }


}
