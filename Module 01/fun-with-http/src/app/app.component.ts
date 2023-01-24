import { Component, OnInit } from '@angular/core';
import { Person } from './models/person.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = false;
  people: Person[] = [];

  constructor(private data: DataService){}

  async ngOnInit() {
    this.isLoading = true;

    this.people = await this.data.getPeople();
    this.isLoading = false;
  }
}
