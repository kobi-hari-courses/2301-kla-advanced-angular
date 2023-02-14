import { AllQuestions } from "../../models/all-questions";
import { Answer } from "../../models/answer.mode";
import { Question } from "../../models/question.model";

export const QuizFeatureKey = 'quiz';

export interface QuizState {
    readonly questions: Question[];
    readonly answers: Answer[];
}

export const quizInitialState: QuizState = {
    questions: AllQuestions,
    answers: []
}