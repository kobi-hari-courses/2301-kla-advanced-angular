import { createReducer } from "@ngrx/store";
import { quizInitialState } from "./quiz.state";

export const quizReducer = createReducer(quizInitialState);