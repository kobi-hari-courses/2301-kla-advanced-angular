import { Component } from '@angular/core';

interface ExamScore {
  exam: string;
  score: number;
}

interface Student {
  name: string;
  scores: ExamScore[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showButton = false;
  toggle() {
    this.showButton = !this.showButton;
  }

  avarageScore(student: Student): number {
    const scores = student.scores.map(s => s.score);
    const sum = scores[0] + scores[1];
    return sum / 2;
  }

  colors = ['red', 'green', 'blue'];


  subjects: string[] = ['Math', 'Science'];

  students: Student[] = [{
    name: 'Paul Smith',
    scores: [
      {
        exam: 'Math',
        score: 45
      },
      {
        exam: 'Science',
        score: 100
      }
    ]
  },
  {
    name: 'Mary John',
    scores: [
      {
        exam: 'Math',
        score: 87
      },
      {
        exam: 'Science',
        score: 100
      }
    ]
  },

  {
    name: 'John Smith',
    scores: [
      {
        exam: 'Math',
        score: 65
      },
      {
        exam: 'Science',
        score: 78
      }
    ]
  }, {
    name: 'Jane Doe',
    scores: [
      {
        exam: 'Math',
        score: 90
      },
      {
        exam: 'Science',
        score: 100
      }
    ]
  }

  ]

}
