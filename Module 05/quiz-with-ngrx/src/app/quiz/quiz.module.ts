import { NgModule } from "@angular/core";
import { ProgressComponent } from "./components/progress/progress.component";
import { QuizDoneComponent } from "./components/quiz-done/quiz-done.component";
import { MainComponent } from './components/main/main.component';
import { StoreModule } from "@ngrx/store";
import { QuizFeatureKey } from "./redux/quiz.state";
import { quizReducer } from "./redux/quiz.reducer";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ProgressComponent,
        QuizDoneComponent,
        MainComponent    
    ], 
    imports: [
        CommonModule,
        StoreModule.forFeature(QuizFeatureKey, quizReducer)
    ], 
    exports: [
        MainComponent
    ]
})
export class QuizModule {

}