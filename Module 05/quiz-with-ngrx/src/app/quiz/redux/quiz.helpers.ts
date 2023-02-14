import { Question } from "../../models/question.model";
import { QuizState } from "./quiz.state";

export function currentQuestion(state: QuizState): Question {
    return state.questions[state.answers.length];
}

export function isCorrect(state: QuizState, answerIndex: number): boolean {
    return currentQuestion(state).correctAnswer === answerIndex;
}