import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';

@Injectable()
export class TimerService {

  constructor() { }

  countSecond(): Observable<number> {
    return interval(1000);
  }

}
