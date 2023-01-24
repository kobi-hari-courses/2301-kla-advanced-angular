import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ConfigData } from '../config.interface';
import { delay } from '../helpers/promise.helpers';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: ConfigData;

  constructor(private http: HttpClient) { }

  async init() {
    console.log('Initializing config service');
    await delay(5000);
    this.config = await firstValueFrom(this.http.get<ConfigData>('assets/cfg.json'));
    console.log('completed initializing config servier');
  }


  getPrefix() {
    return this.config.prefix;
  }

}
