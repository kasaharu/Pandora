import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  count = 0;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.countSecond().subscribe(value => this.count++);
  }

}
