import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuizFeatureKey, QuizState } from "./quiz.state";

export const root = createFeatureSelector<QuizState>(QuizFeatureKey);

export const allQuestions = createSelector(root, state => state.questions);

export const questionsCount = createSelector(allQuestions, all => all.length);

export const allAnswers = createSelector(root, state => state.answers);

export const answersCount = createSelector(allAnswers, all => all.length);

export const currentQuestionIndex = createSelector(allAnswers, all => all.length);

export const currentQuestion = createSelector(allQuestions, currentQuestionIndex, (all, index) => all[index]);

export const quizDone = createSelector(questionsCount, answersCount, (qc, ac) => qc === ac);

export const correctCount = createSelector(allAnswers, all => all.filter(a => a.isCorrect).length);

export const score = createSelector(correctCount, questionsCount, (correct, questions) => correct / questions);