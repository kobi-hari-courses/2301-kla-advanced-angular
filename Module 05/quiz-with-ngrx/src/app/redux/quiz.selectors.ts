import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuizFeatureKey, QuizState } from "./quiz.state";

export const root = createFeatureSelector<QuizState>(QuizFeatureKey);

export const allQuestions = createSelector(root, state => state.questions);

export const allAnswers = createSelector(root, state => state.answers);

export const currentQuestionIndex = createSelector(allAnswers, all => all.length);

export const currentQuestion = createSelector(allQuestions, currentQuestionIndex, (all, index) => all[index]);