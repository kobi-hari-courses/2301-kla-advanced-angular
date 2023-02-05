import { NgForOfContext } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/models/data-model';

@Component({
  selector: 'app-student-presenter',
  templateUrl: './student-presenter.component.html',
  styleUrls: ['./student-presenter.component.css']
})
export class StudentPresenterComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  student!: Student;

  random = Math.ceil(Math.random() * 100000);

  ngOnInit() {
    console.log('Student Card Created');
  }

  ngOnDestroy() {
    console.log('Student Card Destroyed');

  }

  ngOnChanges() {
    console.log('Student Card Input Changed');
  }



}
