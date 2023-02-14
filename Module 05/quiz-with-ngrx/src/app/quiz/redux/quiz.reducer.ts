import { createReducer, on } from "@ngrx/store";
import { isCorrect } from "./quiz.helpers";
import { quizInitialState } from "./quiz.state";
import { QuizActions } from "./quiz.types";

export const quizReducer = createReducer(quizInitialState,
    on(QuizActions.reset, () => quizInitialState),

    on(QuizActions.answerCurrentQuestion, (state, action) => ({
        ...state,
        answers: [...state.answers, {
            userAnswer: action.index,
            isCorrect: isCorrect(state, action.index)
        }]
    }))
);