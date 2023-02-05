import { Component } from '@angular/core';
import { STUDENTS_1, STUDENTS_2 } from './data';
import { Student } from './models/data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 4;
  starter = 2;
  step = 6;

  showButton = false;
  toggle() {
    this.showButton = !this.showButton;
  }

  toggleStudents() {
    if (this.students === STUDENTS_1) {
      this.students = STUDENTS_2
    } else {
      this.students = STUDENTS_1
    }
  }

  addStudent() {
    this.students.push({
      id: 'eeee', 
      name: 'Student Chadash', 
      scores: []
    });

    this.students[0].name = 'Moyshe Levy';
  }

  trackByStudent(index: number, item: Student) {
    return item.id;
  }

  avarageScore(student: Student): number {
    const scores = student.scores.map(s => s.score);
    const sum = scores[0] + scores[1];
    return sum / 2;
  }

  colors = ['red', 'green', 'blue', 'megenta', 'orange', 'cyan', 'purple'];


  subjects: string[] = ['Math', 'Science'];

  students: Student[] = STUDENTS_1;

}
