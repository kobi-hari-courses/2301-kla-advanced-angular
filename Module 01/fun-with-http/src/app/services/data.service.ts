import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async getPeople(): Promise<Person[]> {
    const url = `${environment.baseUrl}/people`;
    const res = this.http.get<Person[]>(url);
    await this.delay(3000);
    return await firstValueFrom(res);
  }

  async getPerson(id: number): Promise<Person> {
    const url = `${environment.baseUrl}/people/${id}`;
    const res = this.http.get<Person>(url);
    await this.delay(3000);
    return await firstValueFrom(res);
  }
}
