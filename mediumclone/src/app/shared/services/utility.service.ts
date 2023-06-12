import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  rangeFunction(start: number, end: number): Array<number> {
    return [...Array(end).keys()].map((el) => {
      return el + start;
    });
  }
}
