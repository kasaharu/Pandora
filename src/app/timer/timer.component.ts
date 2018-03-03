import { Component, OnInit, DoCheck } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, DoCheck {
  count = 0;
  // TODO: subscribe() 結果の適切な返り値がわかったら any をやめる
  timer: any;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timer = this.timerService.countSecond().subscribe(value => this.count++);
  }

  ngDoCheck() {
    if (this.count === 10) {
      this.timer.unsubscribe();
    }
  }
}
