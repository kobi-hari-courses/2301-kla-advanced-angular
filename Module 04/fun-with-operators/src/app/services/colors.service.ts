import { Injectable } from '@angular/core';
import { Color } from '../models/color.model';
import { ALLCOLORS } from '../models/all-colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private allColors: Color[] = Object
    .entries(ALLCOLORS)
    .map(pair => ({
      displayName: pair[1],
      code: pair[0]
    }));

  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(res => setTimeout(res, millis));
  }

  async search(keyword: string): Promise<Color[]> {
    let res: Color[] = [];
    console.log('Searching for ', keyword);

    const lowcaseKeyword = keyword.toLowerCase();

    if (keyword) {
      await this.delay(3000);
      res = this.allColors.filter(clr => clr.displayName.toLowerCase().includes(lowcaseKeyword));
    }

    console.log('Completed search for ', keyword);
    return res;
  }
}
