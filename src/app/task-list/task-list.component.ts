import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList = [
    'DummyTask-1',
    'DummyTask-2',
    'DummyTask-3',
  ];

  constructor() { }

  ngOnInit() {
  }

}
