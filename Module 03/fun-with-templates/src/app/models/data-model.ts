export interface ExamScore {
    exam: string;
    score: number;
  }
  
 export interface Student {
    id: string;
    name: string;
    scores: ExamScore[];
  }
  